import React from 'react';

export default class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <main>
                    <div className="product">
                        <div className="product-item">
                            <header className="product-header">
                                <img src="../../assets/illustration-1.png" alt="images" />
                            </header>
                            <h2 className="product-title">Веб-сайты</h2>
                            <div className="product-text">
                                Мир никогда не будет прежним после того как увидит ваш сайт!
                            </div>
                            <a href="/" className="main-button button_mod_left">
                                заказать
                            </a>
                        </div>

                        <div className="product-item">
                            <header className="product-header">
                                <img src="../../assets/illustration-2.png" alt="images" />
                            </header>
                            <h2 className="product-title">приложения</h2>
                            <div className="product-text">
                                Покорите топ-10 приложений в AppStore и Google Play
                            </div>
                            <a href="/" className="main-button button_mod_center">
                                заказать
                            </a>
                        </div>

                        <div className="product-item">
                            <header className="product-header">
                                <img src="../../assets/illustration-3.png" alt="images" />
                            </header>
                            <h2 className="product-title">презентации</h2>
                            <div className="product-text">
                                Вы даже не подозреваете, насколько вы изумительны!
                            </div>
                            <a href="/" className="main-button button_mod_right">
                                заказать
                            </a>
                        </div>
                    </div>
                    <div className="nerds-information">
                        <div className="information-box">
                            <h2 className="nerds-information-title">
                                Мы — маленькая, но гордая дизайн-студия из Краснодара.
                            </h2>
                            <div className="nerds-information-text">
                                Исповедуем принципы минимализма и чистоты. Ставим математический
                                расчет превыше креатива. Работаем не покладая рук, как роботы.
                            </div>
                            <div className="nerds-information-product">
                                <b>Выполняем заказы на разработку :</b>
                                <ul className="product-list">
                                    <li>Веб-сайтов любой сложности</li>
                                    <li>Мобильных приложений для iOS и Android</li>
                                    <li>Слайдшоу и видео для корпоративных презентаций</li>
                                </ul>
                            </div>
                        </div>

                        <div className="advantages">
                            <div className="advantages-logo">
                                <img
                                    src="../../assets/nerds-illustration.png"
                                    alt="images"
                                />
                            </div>
                            <div className="advantages-box">
                                <div className="advantages-title">
                                    с 2004 года Любим точность во всем:
                                </div>
                                <div className="advantages-content">
                                    <div className="advantages-item">
                                        <span>
                                            146<sup>%</sup>
                                        </span>
                                        Уровень самоотдачи
                                    </div>
                                    <div className="advantages-item">
                                        <span>
                                            100<sup>%</sup>
                                        </span>
                                        Соблюдение сроков
                                    </div>
                                    <div className="advantages-item">
                                        <span>
                                            50<sup>%</sup>
                                        </span>
                                        Минимальная предоплата
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="partners">
                        <div className="partners-item">
                            <img src="../../assets/logo-1.png" alt="images" />
                        </div>

                        <div className="partners-item">
                            <img src="../../assets/logo-2.png" alt="images" />
                        </div>

                        <div className="partners-item">
                            <img src="../../assets/logo-3.png" alt="images" />
                        </div>

                        <div className="partners-item">
                            <img src="../../assets/logo-4.png" alt="images" />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
