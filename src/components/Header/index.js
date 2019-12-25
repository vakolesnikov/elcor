import React from 'react';
import { Link } from 'react-router-dom';
import elcorLogo from '../../assets/elcor-logo.png';
import styles from './header.css';

export default class Header extends React.Component {
    render() {
        return (
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
                        <div className={`${styles['top-header-container']} ${styles['location-information']}`}>
                            <span className={styles['main-logo_address']}>ТЦ "ЦУМ", 1й этаж</span>

                            <span className={styles['work-time']}>
                                С 9:00 до 21:00, без выходных
                            </span>
                        </div>
                    </div>

                    <nav className={styles['main-navigation']}>
                        <ul className={styles['navigation-list']}>
                            <li className={styles['navigation-item']}>
                                <Link to="/products/apple">apple</Link>
                            </li>
                            <li className={styles['navigation-item']}>
                                <Link to="/products/samsung">samsung</Link>
                            </li>
                            <li className={styles['navigation-item']}>
                                <Link to="/products/xiaomi">xiaomi</Link>
                            </li>
                            <li className={styles['navigation-item']}>
                                <Link to="/products/accessory">аксессуары</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
