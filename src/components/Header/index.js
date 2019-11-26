import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header className="main-header">
                <div className="container">
                    <div className="top-navigation-box">
                        <a href="index.html" className="main-logo">
                            <img src="../../assets/nerds-logo.png" alt="nerds-logo" />
                        </a>
                        <nav className="main-navigation">
                            <ul className="navigation-list">
                                <li className="navigation-item">
                                    <a href="catalog.html">студия</a>
                                </li>
                                <li className="navigation-item">
                                    <a href="catalog.html">клиенты</a>
                                </li>
                                <li className="navigation-item">
                                    <a href="catalog.html">магазин</a>
                                </li>
                                <li className="navigation-item">
                                    <a href="catalog.html">контакты</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="basket">
                            <a href="catalog.html">корзина</a>
                        </div>
                    </div>

                    <div className="slider-box">
                        <input
                            id="radio1"
                            type="radio"
                            name="slider-control"
                            value=""
                            defaultChecked
                        />
                        <input id="radio2" type="radio" name="slider-control" value="" />
                        <input id="radio3" type="radio" name="slider-control" value="" />

                        <div className="slider-control">
                            <label htmlFor="radio1" className="control-item-box">
                                <div className="slider-control-item slider-control-item1" />
                            </label>
                            <label htmlFor="radio2" className="control-item-box">
                                <div className="slider-control-item  slider-control-item2" />
                            </label>
                            <label htmlFor="radio3" className="control-item-box">
                                <div className="slider-control-item  slider-control-item3" />
                            </label>
                        </div>

                        <div className="slider-item slider-item1">
                            <section className="slider-information">
                                <h2 className="slider-title">Долго, дорого, скрупулезно.</h2>
                                <div className="slider-text">
                                    Математически выверенный дизайн
                                    <br />
                                    для вашего сайта или мобильного приложения.
                                </div>
                                <a href="/" className="main-button">
                                    Узнать больше
                                </a>
                            </section>
                        </div>
                        <div className="slider-item slider-item2">
                            <section className="slider-information">
                                <h2 className="slider-title">Любим математику как никто другой</h2>
                                <div className="slider-text">
                                    Никакого креатива, только математические формулы
                                    <br />
                                    для расчета идеальных пропорций.
                                </div>
                                <a href="/" className="main-button">
                                    Узнать больше
                                </a>
                            </section>
                        </div>
                        <div className="slider-item slider-item3">
                            <section className="slider-information">
                                <h2 className="slider-title">
                                    Только ночь,
                                    <br />
                                    только хардкор
                                </h2>
                                <div className="slider-text">
                                    Работать днем, как все? Мы против этого.
                                    <br />
                                    Ближе к полуночи работа только начинается.
                                </div>
                                <a href="/" className="main-button">
                                    Узнать больше
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
