import React from 'react';

export default ({ title, img }) => (
    <div className="product-item">
        <header className="product-header">
            <img src={img} alt="image" />
        </header>
        <h2 className="product-title">{title}</h2>
        <div className="product-text">
            Мир никогда не будет прежним после того как увидит ваш сайт!
        </div>
        <a href="/" className="main-button button_mod_left">
            подобрать
        </a>
    </div>
);
