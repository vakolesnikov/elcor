import React from 'react';
import PropTypes from 'prop-types';
import { host } from '../../../api';
import styles from '../Products/index.css';

class ProductItem extends React.Component {
    render() {
        const { name, price, images, handleClick } = this.props;
        const imgSrc = `${host}/images/${images[0]}`;

        return (
            <div className={styles['product-item']} onClick={handleClick}>
                <div className={styles['product-image-container']}>
                    <img className={styles['product-item-image']} src={imgSrc} alt="img" />
                </div>

                <div className={styles['product-item-title']}>{name}</div>
                <div className={styles['product-item-panel']}>
                    <div className={styles['product-item-price']}>{price} р.</div>
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
    price: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleClick: PropTypes.func.isRequired
};

export default ProductItem;
