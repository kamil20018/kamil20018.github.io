import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import EditProduct from '../components/Edit';

function Product() {
    var [products, setProducts] = useState([]);
    var [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => { setProducts(data.products); })
            .catch(error => { console.error('Error fetching products', error);});
    };


    const startEditing = (product) => {
        setEditingProduct(product);
    };

    const saveEdit = (id, title, description) => {
        fetch(`https://dummyjson.com/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description }),
        })
            .then(response => response.json())
            .then(updatedProduct => {
                const updatedProducts = products.map(p =>
                    p.id === updatedProduct.id ? updatedProduct : p
                );
                setProducts(updatedProducts);
                setEditingProduct(null);
            });
    };

    return (
        <div>
            <button>Sort</button>
            {editingProduct ? (<EditProduct product={editingProduct} onSave={saveEdit} />) 
            : (<ProductList products={products} onEdit={startEditing} />)}
        </div>
    );
}

export default Product;