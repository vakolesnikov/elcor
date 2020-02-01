import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.css';

export const Navigation = () => (
    <nav className={style['main-navigation']}>
        <ul>
            <li>
                <Link to="product_list">Товары</Link>
            </li>
            <li>
                <Link to="orders">Заказы</Link>
            </li>
            <li>
                <Link to="users">Пользователи</Link>
            </li>
        </ul>
    </nav>
);
