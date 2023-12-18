import React from 'react';
import Product from './Product';

function ProductList({ products, onEdit }) {
    return (
        <table>
            <tr>
                <th>Icon</th>
                <th>Name</th>
                <th>Desc</th>
            </tr>
            <tbody>
            {products.map(product => (
                <Product key={product.id} product={product} onEdit={onEdit} />
            ))}
            </tbody>
        </table>
    );
}

export default ProductList;