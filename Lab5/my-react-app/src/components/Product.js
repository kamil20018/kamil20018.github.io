import React from 'react';

function Product({ product, onEdit }) {
    return (
        <tr>
            <td>
                <img src={product.thumbnail} alt="img didn't load"/>
            </td>
            <td>
                {product.title}
            </td>
            <td>
                {product.description}
            </td>
            <td>
                <button onClick={() => onEdit(product)}>Edit</button>
            </td>
        </tr>
    );
}

export default Product;