import React from 'react';
import PropTypes from 'prop-types';

import styles from '../Products/index.css';

class ProductItem extends React.Component {
    render() {
        const { name, prices, images, handleClick } = this.props;

        return (
            <div className={styles['product-item']} onClick={handleClick}>
                <div className={styles['product-image-container']}>
                    <img
                        className={styles['product-item-image']}
                        src={`http://elcor58.ru:3000/images/${images[0]}`}
                        alt="apple"
                    />
                </div>

                <div className={styles['product-item-title']}>{name}</div>
                <div className={styles['product-item-panel']}>
                    <div className={styles['product-item-price']}>{prices[0]} р.</div>
                    <button type="button" className={styles['product-item-buy']}>
                        Подробнее
                    </button>
                </div>
            </div>
        );
    }
}

ProductItem.propTypes = {
    name: PropTypes.string.isRequired,
    prices: PropTypes.arrayOf(PropTypes.number).isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleClick: PropTypes.func.isRequired
};

export default ProductItem;
