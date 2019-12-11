import React from 'react';

import './index.css';
import products from './products';
import ProductItem from '../ProductItem';

const Products = props => {
    const { id: currentProduct } = props.match.params;
    return (
        <div className="product-container">
            <h2 className="product-title">Apple</h2>
            <div className="product-custom-settings">Сортировка: по умолчанию</div>
            <div className="product-list">
                {products
                    .filter(item => (item.type === currentProduct))
                    .map((product, index) => {
                        const { memory, prices, name, images } = product;

                        return (
                            <ProductItem
                                title={name}
                                memory={memory}
                                prices={prices}
                                key={`${name}${index}`}
                                images={images}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Products;
