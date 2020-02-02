import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './header.css';

export const NavigationItem = ({ type, name, img }) => (
    <li className={styles['navigation-item']}>
        <Link to={`/products/${type}`}>
            <div className={styles['desktop-navigation-item-container']}>{name}</div>
            <div className={styles['mobile-navigation-item-container']}>
                <img src={img} alt="img" className={styles['mobile-navigation-image']} />
            </div>
        </Link>
    </li>
);

NavigationItem.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
};
