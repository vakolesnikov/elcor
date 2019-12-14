import React from 'react';
import PropTypes from 'prop-types';

import styles from '../Products/index.css';

import samsungImg from '../../assets/samsung.jpeg';

class ProductItem extends React.Component {
    constructor() {
        super();

        this.state = {
            isOpenCard: false
        };
    }

    renderCard = () => {
        const { title, prices, images } = this.props;

        return (
            <div className={styles['product-card']}>
                <div className={styles['product-card-content']}>
                    <div className={styles['main-product-information']}>
                        <div className={styles['product-card-information']}>
                            <h2 className={styles['card-title']}>{title}</h2>
                            <img
                                className={styles['card-image']}
                                src={samsungImg}
                                alt="samsungImg"
                            />
                        </div>
                        <div className={styles['product-card-options']}>
                            <div className={styles['card-options-item']}>
                                <span className={styles['options-title']}>Накопитель:</span>
                                <span
                                    className={`${styles['option-param']} ${
                                        styles['selected-option-param']
                                    }`}
                                >
                                    32
                                </span>
                                <span className={styles['option-param']}>128</span>
                            </div>

                            <div className={styles['card-options-item']}>
                                <span className={styles['options-title']}>Цена:</span>
                                <span className={styles['price-value']}>18990 р.</span>
                            </div>

                            <div className={styles['card-options-item']}>
                                <button type="button" className={styles['product-item-buy']}>
                                    Купить
                                </button>
                            </div>
                        </div>
                        <button
                            type="button"
                            className={styles['card-close-button']}
                            onClick={() => this.setState({ isOpenCard: false })}
                        >
                            +
                        </button>
                    </div>
                    <div className={styles['product-description']}>
                        <div className={styles['description-tabs']}>
                            <li
                                className={`${styles['description-tab']} ${
                                    styles['description-tab-active']
                                }`}
                            >
                                Описание
                            </li>
                            <li className={styles['description-tab']}>Доставка</li>
                            <li className={styles['description-tab']}>Оплата</li>
                            <li className={styles['description-tab']}>Возврат</li>
                        </div>

                        <div className={styles['description-content']}>
                            <h3>Коротко о товаре:</h3>
                            <div className={styles['description-item']}>- смартфон с iOS 10</div>
                            <div className={styles['description-item']}>
                                - экран 4.7", разрешение 1334x750
                            </div>
                            <div className={styles['description-item']}>
                                - камера 12 МП, автофокус
                            </div>
                            <div className={styles['description-item']}>
                                - память 32 Гб, без слота для карт памяти
                            </div>
                            <div className={styles['description-item']}>
                                - 3G, 4G LTE, LTE-A, Wi-Fi, Bluetooth, NFC, GPS, ГЛОНАСС
                            </div>
                            <div className={styles['description-item']}>
                                - объем оперативной памяти 2 Гб
                            </div>
                            <div className={styles['description-item']}>
                                - аккумулятор 1960 мА⋅ч
                            </div>
                            <div className={styles['description-item']}>
                                - вес 138 г, ШxВxТ 67.10x138.30x7.10 мм
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        const { title, prices, images } = this.props;
        const { isOpenCard } = this.state;

        return (
            <div className={styles['product-item']}>
                <img
                    className={styles['product-item-image']}
                    src={`http://elcor.herokuapp.com/images/${images[0]}`}
                    alt="apple"
                />
                <div className={styles['product-item-title']}>{title}</div>
                <div className={styles['product-item-panel']}>
                    <div className={styles['product-item-price']}>{prices[0]} р.</div>
                    <button
                        type="button"
                        className={styles['product-item-buy']}
                        onClick={() => this.setState({ isOpenCard: true })}
                    >
                        Купить
                    </button>
                </div>
                {isOpenCard && this.renderCard()}
            </div>
        );
    }
}

ProductItem.propTypes = {
    title: PropTypes.string.isRequired,
    prices: PropTypes.arrayOf(PropTypes.number).isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ProductItem;
