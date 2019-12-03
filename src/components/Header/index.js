import React from 'react';
import { Link } from 'react-router-dom';
import elcorLogo from '../../assets/elcor-logo.png';

export default class Header extends React.Component {
    render() {
        return (
            <header className="main-header">
                <div className="container main-header-content">
                    <div className="top-navigation-box">
                        <Link to="/" className="main-logo">
                            <div className="main-logo_title">Elcor</div>
                            <img className="main-logo_image" src={elcorLogo} alt="elcor-logo" />
                            <span className="main-logo_address">ТЦ "ЦУМ", 1й этаж</span>
                        </Link>

                        <div className="contacts-container">
                            <a href="tel:+79631033030" className="phone-container">
                                <span className="material-icons phone-icon">local_phones</span>
                                <span className="phone-number">8 (963)103-30-30</span>
                            </a>
                            <span className="work-time">С 9:00 до 21:00, без выходных</span>
                        </div>
                    </div>
                    <nav className="main-navigation">
                        <ul className="navigation-list">
                            <li className="navigation-item">
                                <Link to="/catalog">apple</Link>
                            </li>
                            <li className="navigation-item">
                                <Link to="/catalog">samsung</Link>
                            </li>
                            <li className="navigation-item">
                                <Link to="/catalog">xiaomi</Link>
                            </li>
                            <li className="navigation-item">
                                <Link to="/catalog">аксессуары</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
