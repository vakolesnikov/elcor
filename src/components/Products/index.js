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

export class Products extends React.Component {
    render() {
        const { id: currentProduct } = this.props.match.params;
        const isAll = currentProduct === 'all';
        const selectedProduct = isAll
            ? products
            : products.filter(item => item.type === currentProduct);

        return (
            <div className={styles['product-container']}>
                <h2 className={styles['product-title']}>{pageTitles[currentProduct]}</h2>
                <div className={styles['product-list']}>
                    {selectedProduct.map((product, index) => {
                        return <ProductItem {...product} key={`${product.name}${index}`} />;
                    })}
                </div>
            </div>
        );
    }
}

export default Products;
