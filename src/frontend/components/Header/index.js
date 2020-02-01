import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationItem } from './NavigationItem';
import config from '../../config';
import elcorLogo from '../../assets/elcor-logo.png';
import apple from '../../assets/apple-tab.png';
import samsung from '../../assets/samsung-tab.png';
import xiaomi from '../../assets/xiaomi-tab.png';
import accessory from '../../assets/accessory-tab.png';

import styles from './header.css';

const tabImages = { apple, samsung, xiaomi, accessory };

const Header = () => (
    <header className={styles['main-header']}>
        <div className={styles['main-header-content']}>
            <div className={styles['top-header-box']}>
                <div className={styles['top-header-container']}>
                    <Link to="/" className={styles['main-logo']}>
                        <div className={styles['main-logo_title']}>Elcor</div>
                        <img
                            src={elcorLogo}
                            alt="elcor-logo"
                            className={styles['main-logo_image']}
                        />
                    </Link>

                    <div className={styles['contacts-container']}>
                        <a href="tel:+79631033030" className={styles['phone-container']}>
                            <span className={`material-icons ${styles['phone-icon']}`}>
                                local_phones
                            </span>
                            <span className={styles['phone-number']}>8 (963)103-30-30</span>
                        </a>
                    </div>
                </div>
                <div
                    className={`${styles['top-header-container']} ${
                        styles['location-information']
                    }`}
                >
                    <span className={styles['main-logo_address']}>
                        ТЦ &#8220;ЦУМ&#8221;, 1й этаж
                    </span>

                    <span className={styles['work-time']}>С 9:00 до 21:00, без выходных</span>
                </div>
            </div>

            <nav className={styles['main-navigation']}>
                <ul className={styles['navigation-list']}>
                    {config.header.tabs.map(({ type, name }) => (
                        <NavigationItem key={type} type={type} name={name} img={tabImages[type]} />
                    ))}
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;
