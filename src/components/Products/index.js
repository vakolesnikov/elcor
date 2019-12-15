import React from 'react';

import styles from './index.css';
import products from './products';
import ProductItem from '../ProductItem';

const pageTitles = {
    apple: 'Apple',
    samsung: 'Samsung',
    xiaomi: 'Xiaomi',
    accessory: 'Аксессуары'
};

const Products = props => {
    const { id: currentProduct } = props.match.params;

    return (
        <div className={styles['product-container']}>
            <h2 className={styles['product-title']}>{pageTitles[currentProduct]}</h2>
            <div className={styles['product-custom-settings']}>Сортировка: по умолчанию</div>
            <div className={styles['product-list']}>
                {products
                    .filter(item => item.type === currentProduct)
                    .map((product, index) => {
                        return <ProductItem {...product} key={`${product.name}${index}`} />;
                    })}
            </div>
        </div>
    );
};

export default Products;
