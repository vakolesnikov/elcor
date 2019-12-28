import React from 'react';

import styles from './index.css';
import products from './products';
import ProductItem from '../ProductItem';

const pageTitles = {
    apple: 'Apple',
    samsung: 'Samsung',
    xiaomi: 'Xiaomi',
    accessory: 'Аксессуары',
    all: 'Весь ассортимент'
};

const OPTION_NAMES = {
    memory: 'Память',
    size: 'Размер'
};

const SERVICE_TABS = [
    { name: 'description', title: 'описание' },
    { name: 'delivery', title: 'доставка' },
    { name: 'payment', title: 'оплата' }
];

export class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentProduct: {},
            selectedMainOptionIndex: 0,
            openServiceTab: 'description',
            isShowSocialIcon: false
        };
    }

    renderCard = () => {
        const { name, options, prices, images } = this.state.currentProduct;
        const { selectedMainOptionIndex, openServiceTab, isShowSocialIcon } = this.state;
        const nameOption = Object.keys(options)[0];
        return (
            <div className={styles['product-card']}>
                <div
                    className={styles['product-card-overlay']}
                    onClick={() => this.setState({ currentProduct: {} })}
                />
                <div className={styles['product-card-content']}>
                    <div className={styles['main-product-information']}>
                        <div className={styles['product-card-information']}>
                            <h2 className={styles['card-title']}>{name}</h2>
                            <div className={styles['card-image']}>
                                <img
                                    src={`http://elcor58.ru/images/${images[0]}`}
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
                                    // href="tel:+79631033030"
                                    type="button"
                                    className={styles['product-item-buy']}
                                    onClick={() =>
                                        this.setState({ isShowSocialIcon: !isShowSocialIcon })
                                    }
                                >
                                    Связаться
                                </a>

                                <div
                                    className={`${styles.social} ${
                                        isShowSocialIcon ? styles['social-active'] : ''
                                    }`}
                                >
                                    <a
                                        href="https://vk.com/elcor58"
                                        className={`${styles['social-item']} ${
                                            styles['social-vk']
                                        }`}
                                    />
                                    <a
                                        href="https://instagram.com/elcor58"
                                        className={`${styles['social-item']} ${
                                            styles['social-insta']
                                        }`}
                                    />

                                    <a
                                        href="tel:+79631033030"
                                        className={styles['phone-container']}
                                    >
                                        <span className={`material-icons ${styles['phone-icon']}`}>
                                            local_phones
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['product-service-information']}>
                        <div className={styles['service-tabs']}>
                            {SERVICE_TABS.map(tab => (
                                <li
                                    key={tab.name}
                                    className={`${styles['service-tab']} ${
                                        openServiceTab === tab.name
                                            ? styles['service-tab-active']
                                            : ''
                                    }`}
                                    onClick={() => this.setState({ openServiceTab: tab.name })}
                                >
                                    {tab.title}
                                </li>
                            ))}
                        </div>

                        {this.renderDescriptionContent()}
                        {this.renderDeliveryContent()}
                        {this.renderPaymentContent()}
                    </div>

                    <button
                        type="button"
                        className={styles['card-close-button']}
                        onClick={() => this.setState({ currentProduct: {} })}
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
        const { id: currentProductId } = this.props.match.params;
        const { currentProduct } = this.state;
        const isAll = currentProductId === 'all';
        const selectedProduct = isAll
            ? products
            : products.filter(item => item.type === currentProductId);

        return (
            <div className={styles['product-container']}>
                <h2 className={styles['product-title']}>{pageTitles[currentProductId]}</h2>
                <div className={styles['product-list']}>
                    {selectedProduct.length ? (
                        selectedProduct.map((product, index) => {
                            return (
                                <ProductItem
                                    {...product}
                                    key={`${product.name}${index}`}
                                    handleClick={() => this.setState({ currentProduct: product })}
                                />
                            );
                        })
                    ) : (
                        <div className={styles['no-product']}>
                            Товар времменно отсутствует в продаже. Можете подобрать для себя
                            что-нибудь в других категориях ;)
                        </div>
                    )}
                </div>
                {currentProduct.name && this.renderCard()}
            </div>
        );
    }
}

export default Products;
