import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ title, price, img }) => (
    <div className="product-item">
        <img className="product-item-image" src={img} alt="apple" />
        <div className="product-item-title">{title}</div>
        <div className="product-item-panel">
            <div className="product-item-price">{price} р.</div>
            <a href="/" className="product-item-buy">
                Купить
            </a>
        </div>
    </div>
);

ProductItem.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default ProductItem;
