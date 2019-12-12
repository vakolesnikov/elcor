import React from 'react';
import PropTypes from 'prop-types';

import styles from '../Products/index.css';

import samsungImg from '../../assets/samsung.jpeg';

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
            <button type="button" className={styles['product-item-buy']}>
                Купить
            </button>
        </div>
        <div className={styles['product-card']}>
            <div className={styles['product-card-content']}>
                <div className={styles['product-card-information']}>
                    <h2>{title}</h2>
                    <img src={samsungImg} alt="samsungImg" />
                </div>
                <div className={styles['product-card-options']}>
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    </div>
);

ProductItem.propTypes = {
    title: PropTypes.string.isRequired,
    prices: PropTypes.arrayOf(PropTypes.number).isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ProductItem;
