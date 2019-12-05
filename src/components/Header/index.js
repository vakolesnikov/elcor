import React from 'react';
import { Link } from 'react-router-dom';
import elcorLogo from '../../assets/elcor-logo.png';

import './index.css';

export default class Header extends React.Component {
    render() {
        return (
            <header className="main-header">
                <div className="main-header-content">
                    <div className="top-header-box">
                        <div className="top-header-container">
                            <Link to="/" className="main-logo">
                                <div className="main-logo_title">Elcor</div>
                                <img className="main-logo_image" src={elcorLogo} alt="elcor-logo" />
                            </Link>

                            <div className="contacts-container">
                                <a href="tel:+79631033030" className="phone-container">
                                    <span className="material-icons phone-icon">local_phones</span>
                                    <span className="phone-number">8 (963)103-30-30</span>
                                </a>
                            </div>
                        </div>
                        <div className="top-header-container">
                            <span className="main-logo_address">ТЦ "ЦУМ", 1й этаж</span>

                            <span className="work-time">С 9:00 до 21:00, без выходных</span>
                        </div>
                    </div>

                    <nav className="main-navigation">
                        <ul className="navigation-list">
                            <li className="navigation-item">
                                <Link to="/products/apple">apple</Link>
                            </li>
                            <li className="navigation-item">
                                <Link to="/products/samsung">samsung</Link>
                            </li>
                            <li className="navigation-item">
                                <Link to="/products/xiaomi">xiaomi</Link>
                            </li>
                            <li className="navigation-item">
                                <Link to="/products/accessory">аксессуары</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
