import React from 'react';

import './index.css';
import products from './products';
import appleImg from '../../assets/apple.jpg';
import ProductItem from '../ProductItem';

const Products = props => {
    console.log(props);
    return (
        <div className="product-container">
            <h2 className="product-title">Apple</h2>
            <div className="product-custom-settings">Сортировка: по умолчанию</div>
            <div className="product-list">
                {products.map((product, index) => {
                    const { memory, price, name } = product;

                    return (
                        <ProductItem
                            title={name}
                            memory={memory}
                            price={price}
                            key={`${name}${index}`}
                            img={appleImg}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
