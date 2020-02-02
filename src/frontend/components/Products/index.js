import React from 'react';
import { getProductList, originHost } from '../../api';

import styles from './index.css';
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
    { name: 'description', title: 'Описание' },
    { name: 'delivery', title: 'Доставка' },
    { name: 'payment', title: 'Оплата' }
];

export class Products extends React.Component {
    constructor(props) {
        super(props);

        this.initialState = {
            currentProduct: {},
            selectedMainOptionIndex: 0,
            openServiceTab: 'description',
            isShowSocialIcon: false
        };

        this.state = {
            ...this.initialState,
            products: []
        };

        const compare = (elem1, elem2) => {
            const [first] = elem1.prices;
            const [second] = elem2.prices;

            return +first > +second ? 1 : -1;
        };

        getProductList().then(res => this.setState({ products: res.sort(compare) }));
    }

    renderCard = () => {
        const {
            selectedMainOptionIndex,
            openServiceTab,
            isShowSocialIcon,
            currentProduct
        } = this.state;
        const { name, options, prices, images } = currentProduct;
        const nameOption = Object.keys(options)[0];
        const img = `${originHost}/images/${images[0]}`;

        return (
            <div className={styles['product-card']}>
                <div className={styles['product-card-overlay']} onClick={this.clearState} />
                <div className={styles['product-card-content']}>
                    <div className={styles['main-product-information']}>
                        <div className={styles['product-card-information']}>
                            <h2 className={styles['card-title']}>{name}</h2>
                            <div className={styles['card-image']}>
                                <img src={img} alt="samsungImg" />
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
                                <button
                                    type="button"
                                    className={styles['product-item-buy']}
                                    onClick={() =>
                                        this.setState({ isShowSocialIcon: !isShowSocialIcon })
                                    }
                                >
                                    Связаться
                                </button>

                                <div
                                    className={`${styles.social} ${
                                        isShowSocialIcon ? styles['social-active'] : ''
                                    }`}
                                >
                                    <a
                                        href="https://vk.com/im?media=&sel=-120354441"
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
                        onClick={this.clearState}
                    >
                        <span className="material-icons">close</span>
                    </button>
                </div>
            </div>
        );
    };

    renderDescriptionContent = () => {
        const { openServiceTab, currentProduct } = this.state;

        return (
            <div
                className={`${styles['service-item']} ${styles['description-content']} ${
                    openServiceTab === 'description' ? styles['service-item-visible'] : ''
                }`}
            >
                <h3>Коротко о товаре:</h3>
                {currentProduct.descriptions.map(text => (
                    <div key={text} className={styles['description-item']}>
                        - {text}
                    </div>
                ))}
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
                    <li>
                        <b>Рассрочка от 6 до 24 месяцев</b>
                    </li>
                </ul>
            </div>
        );
    };

    clearState = () => this.setState(this.initialState);

    render() {
        const { products } = this.state;

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
                                    price={product.prices[0]}
                                    key={product._id}
                                    handleClick={() => this.setState({ currentProduct: product })}
                                />
                            );
                        })
                    ) : (
                        <div className={styles['no-products']}>
                            Товар временно недоступен для покупки. Поищите что-нибудь в других
                            категориях, там много интересного ;)
                        </div>
                    )}
                </div>
                {currentProduct.name && this.renderCard()}
            </div>
        );
    }
}

export default Products;
