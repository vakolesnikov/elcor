import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ title, prices, images }) => (
    <div className="product-item">
        <img
            className="product-item-image"
            src={`http://elcor.herokuapp.com/assets/${images[0]}`}
            alt="apple"
        />
        <div className="product-item-title">{title}</div>
        <div className="product-item-panel">
            <div className="product-item-price">{prices[0]} р.</div>
            <a href="/" className="product-item-buy">
                Купить
            </a>
        </div>
    </div>
);

ProductItem.propTypes = {
    title: PropTypes.string.isRequired,
    prices: PropTypes.arrayOf(PropTypes.number).isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ProductItem;
