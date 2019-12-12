import React from 'react';
import PropTypes from 'prop-types';

import styles from '../Products/index.css';

const ProductItem = ({ title, prices, images }) => (
    <div className={styles['product-item']}>
        <img
            className={styles['product-item-image']}
            src={`http://elcor.herokuapp.com/images/${images[0]}`}
            alt="apple"
        />
        <div className={styles['product-item-title']}>{title}</div>
        <div className={styles['product-item-panel']}>
            <div className={styles['product-item-price']}>{prices[0]} р.</div>
            <a href="/" className={styles['product-item-buy']}>
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
