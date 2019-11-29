import React from 'react';

import ProductItem from '../ProductItem';

import logo1 from '../../assets/logo-1.png';
import logo2 from '../../assets/logo-2.png';
import logo3 from '../../assets/logo-3.png';
import logo4 from '../../assets/logo-4.png';
import nerdsIllustration from '../../assets/nerds-illustration.png';

import apple from '../../assets/apple.jpg';
import xiaomi from '../../assets/xiaomi.jpg';
import samsung from '../../assets/samsung.jpeg';

import appleLogo from '../../assets/appleLogo.png';
import xiaomiLogo from '../../assets/xiaomiLogo.png';
import samsungLogo from '../../assets/samsungLogo.png';


const products = [
    { title: 'apple', img: apple },
    { title: 'samsung', img: samsung },
    { title: 'xiaomi', img: xiaomi }
];

export default class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <main>
                    <div className="product">
                        {products.map((product, index) => (
                            <ProductItem title={product.title} key={index} img={product.img} />
                        ))}
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
                                <img src={nerdsIllustration} alt="images" />
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
                        <img src={appleLogo} alt="images" className="partners-item" />

                        <img src={samsungLogo} alt="images" className="partners-item" />

                        <img src={xiaomiLogo} alt="images" className="partners-item" />

                        <img src={logo4} alt="images" className="partners-item" />
                    </div>
                </main>
            </div>
        );
    }
}
