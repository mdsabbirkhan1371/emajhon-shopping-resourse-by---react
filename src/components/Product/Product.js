import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = ({ product, addToCart }) => {

    // const { product, addToCart } = props;

    // const { name, price, img, seller, ratings } = props.product;
    const { name, price, img, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <p className='prduct-style'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>

            <button onClick={() => addToCart(product)} className='button'>
                <p className='btn-icon'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            {/* <button onClick={() => props.addToCart(props.product)} className='button'>Add To Cart</button> */}



        </div>
    );
};

export default Product;