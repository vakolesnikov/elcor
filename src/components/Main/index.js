import React from 'react';
import { Link } from 'react-router-dom';

import elcorLogo from '../../assets/elcor-logo.png';
import Map from '../Map';

const advantagesItems = [
    { title: 'Уровень самоотдачи', value: 146 },
    { title: 'Соблюдение сроков', value: 100 },
    { title: 'Минимальная предоплата', value: 30 }
];

export default class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <main className="main">
                    <div className="main-banner">
                        <div className="main-banner-item main-banner-item1">
                            <section className="main-banner-information">
                                <h2 className="main-banner-title">
                                    Оригинальная техника
                                    <br />
                                    по выгодным ценам
                                </h2>
                                <Link to="/catalog">
                                    <span className="main-button">Перейти в магазин</span>
                                </Link>
                            </section>
                        </div>
                    </div>
                    <div className="nerds-information">
                        <div className="information-box">
                            <h2 className="nerds-information-title">
                                Мы — маленький, но гордый магазин из Пензы
                            </h2>
                            <div className="nerds-information-text">
                                Ставим счастье и радость клиента превыше собственной выгоды.
                                <br />
                                Работаем не покладая рук, как роботы.
                            </div>
                            <div className="nerds-information-product">
                                <b>Выполняем заказы на разработку :</b>
                                <ul className="nerds-product-list">
                                    <li>Рассрочка 1% в месяц</li>
                                    <li>Гарантия (30 дней на Б/У - 1 год на новый)</li>
                                    <li>Trade-in (обмен Вашей техники на новую)</li>
                                    <li>Бесплатная доставка по городу</li>
                                </ul>
                            </div>
                        </div>

                        <div className="advantages">
                            <img className="advantages-logo" src={elcorLogo} alt="images" />

                            <div className="advantages-box">
                                <div className="advantages-title">Любим точность во всем:</div>
                                <div className="advantages-content">
                                    {advantagesItems.map(({ title, value }) => (
                                        <div className="advantages-item" key={title}>
                                            <span>
                                                {value}
                                                <sup>%</sup>
                                            </span>
                                            {title}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Map />
                </main>
            </div>
        );
    }
}
