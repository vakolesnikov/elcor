import React from 'react';
import PropTypes from 'prop-types';

import styles from '../Products/index.css';

import samsungImg from '../../assets/samsung.jpeg';

const OPTION_NAMES = {
    memory: 'Память',
    size: 'Размер'
};

class ProductItem extends React.Component {
    constructor() {
        super();

        this.state = {
            isOpenCard: false,
            selectedMainOptionIndex: 0,
            openServiceTab: 'description'
        };
    }

    renderCard = () => {
        const { name, options, prices, images } = this.props;
        const { selectedMainOptionIndex, openServiceTab } = this.state;
        const nameOption = Object.keys(options)[0];
        return (
            <div className={styles['product-card']}>
                <div className={styles['product-card-content']}>
                    <div className={styles['main-product-information']}>
                        <div className={styles['product-card-information']}>
                            <h2 className={styles['card-title']}>{name}</h2>
                            <div className={styles['card-image']}>
                                <img
                                    src={`http://elcor.herokuapp.com/images/${images[0]}`}
                                    alt="samsungImg"
                                />
                            </div>
                        </div>
                        <div className={styles['product-card-options']}>
                            <div className={styles['card-options-item']}>
                                <span className={styles['options-title']}>
                                    {OPTION_NAMES[nameOption]}:
                                </span>
                                {options[nameOption].map((value, index) => (
                                    <button
                                        type="button"
                                        className={`${styles['option-param']} ${
                                            selectedMainOptionIndex === index
                                                ? styles['selected-option-param']
                                                : ''
                                        }`}
                                        key={value}
                                        onClick={() =>
                                            this.setState({ selectedMainOptionIndex: index })
                                        }
                                    >
                                        {value}
                                    </button>
                                ))}
                            </div>

                            <div className={styles['card-options-item']}>
                                <span className={styles['options-title']}>Цена:</span>
                                <span className={styles['price-value']}>
                                    {prices[selectedMainOptionIndex]}
                                </span>
                            </div>

                            <div className={styles['card-options-item']}>
                                <a
                                    href="tel:+79631033030"
                                    type="button"
                                    className={styles['product-item-buy']}
                                >
                                    Купить
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles['product-service-information']}>
                        <div className={styles['service-tabs']}>
                            <li
                                className={`${styles['service-tab']} ${
                                    openServiceTab === 'description'
                                        ? styles['service-tab-active']
                                        : ''
                                }`}
                                onClick={() => this.setState({ openServiceTab: 'description' })}
                            >
                                Описание
                            </li>
                            <li
                                className={`${styles['service-tab']} ${
                                    openServiceTab === 'delivery'
                                        ? styles['service-tab-active']
                                        : ''
                                }`}
                                onClick={() => this.setState({ openServiceTab: 'delivery' })}
                            >
                                Доставка
                            </li>
                            <li
                                className={`${styles['service-tab']} ${
                                    openServiceTab === 'payment' ? styles['service-tab-active'] : ''
                                }`}
                                onClick={() => this.setState({ openServiceTab: 'payment' })}
                            >
                                Оплата
                            </li>
                        </div>

                        {this.renderDescriptionContent()}
                        {this.renderDeliveryContent()}
                        {this.renderPaymentContent()}
                    </div>

                    <button
                        type="button"
                        className={styles['card-close-button']}
                        onClick={() => this.setState({ isOpenCard: false })}
                    >
                        <span className="material-icons">close</span>
                    </button>
                </div>
            </div>
        );
    };

    renderDescriptionContent = () => {
        const { openServiceTab } = this.state;

        return (
            <div
                className={`${styles['service-item']} ${styles['description-content']} ${
                    openServiceTab === 'description' ? styles['service-item-visible'] : ''
                }`}
            >
                <h3>Коротко о товаре:</h3>
                <div className={styles['description-item']}>- смартфон с iOS 10</div>
                <div className={styles['description-item']}>- экран 4.7", разрешение 1334x750</div>
                <div className={styles['description-item']}>- камера 12 МП, автофокус</div>
                <div className={styles['description-item']}>
                    - память 32 Гб, без слота для карт памяти
                </div>
                <div className={styles['description-item']}>
                    - 3G, 4G LTE, LTE-A, Wi-Fi, Bluetooth, NFC, GPS, ГЛОНАСС
                </div>
                <div className={styles['description-item']}>- объем оперативной памяти 2 Гб</div>
                <div className={styles['description-item']}>- аккумулятор 1960 мА⋅ч</div>
                <div className={styles['description-item']}>
                    - вес 138 г, ШxВxТ 67.10x138.30x7.10 мм
                </div>
            </div>
        );
    };

    renderDeliveryContent = () => {
        const { openServiceTab } = this.state;

        return (
            <div
                className={`${styles['service-item']} ${styles['delivery-information']} ${
                    openServiceTab === 'delivery' ? styles['service-item-visible'] : ''
                }`}
            >
                <h3>Доставка заказа может быть осуществлена одним из способов ниже:</h3>
                <ul>
                    <li className={styles['delivery-information-item']}>
                        <b>Доставка курьером</b>
                        <br />
                        Доставка производится в удобное для вас время и по удобному для вас адресу.
                        Срок доставки по Пензе от 1 до 2 дней. Оплата производится при получении
                        товара наличными, либо переводом денежных средств на карту.
                    </li>
                    <li>
                        <b>Самовывоз из магазина</b>
                        <br />
                        Забрать заказ можно в магазине в любой день с 9:00 до 21:00.
                    </li>
                </ul>
            </div>
        );
    };

    renderPaymentContent = () => {
        const { openServiceTab } = this.state;

        return (
            <div
                className={`${styles['service-item']} ${styles['delivery-information']} ${
                    openServiceTab === 'payment' ? styles['service-item-visible'] : ''
                }`}
            >
                <h3>Оплатить заказ можно разными способами:</h3>
                <ul>
                    <li className={styles['delivery-information-item']}>
                        <b>Наличными</b>
                    </li>
                    <li>
                        <b>Банковской картой Visa или MasterCard</b>
                    </li>
                </ul>
            </div>
        );
    };

    render() {
        const { name, prices, images } = this.props;
        const { isOpenCard } = this.state;

        return (
            <div className={styles['product-item']}>
                <img
                    className={styles['product-item-image']}
                    src={`http://elcor.herokuapp.com/images/${images[0]}`}
                    alt="apple"
                />
                <div className={styles['product-item-title']}>{name}</div>
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
    name: PropTypes.string.isRequired,
    prices: PropTypes.arrayOf(PropTypes.number).isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    options: PropTypes.objectOf(PropTypes.any).isRequired
};

export default ProductItem;
