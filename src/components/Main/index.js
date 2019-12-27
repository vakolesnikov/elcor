import React from 'react';
import { Link } from 'react-router-dom';

import elcorLogo from '../../assets/elcor-logo.png';
import Map from '../Map';

import styles from './index.css';

const advantagesItems = [
    { title: 'Уровень самоотдачи', value: 146 },
    { title: 'Соблюдение сроков', value: 100 },
    { title: 'Минимальная предоплата', value: 30 }
];

export default class Main extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <main className={styles.main}>
                    <div className={styles['main-banner']}>
                        <div
                            className={`${styles['main-banner-item']} ${
                                styles['main-banner-item1']
                            }`}
                        >
                            <section className={styles['main-banner-information']}>
                                <div className={styles['main-banner-background']} />
                                <h2 className={styles['main-banner-title']}>
                                    Оригинальная техника по выгодным ценам
                                </h2>
                                <Link to="/products/all">
                                    <span className={styles['main-button']}>Перейти в магазин</span>
                                </Link>
                            </section>
                        </div>
                    </div>
                    <div className={styles['nerds-information']}>
                        <div className={styles['information-box']}>
                            <h2 className={styles['nerds-information-title']}>
                                Мы — маленький, но гордый магазин из Пензы
                            </h2>
                            <div className={styles['nerds-information-text']}>
                                "Ставим счастье и радость клиента превыше собственной выгоды.
                                <br />
                                Работаем для вас не покладая рук."
                            </div>
                            <div className={styles['nerds-information-product']}>
                                <b>ПРИ ПОКУПКЕ ЛЮБОГО ТОВАРА :</b>
                                <ul className={styles['nerds-product-list']}>
                                    <li>Рассрочка 1% в месяц</li>
                                    <li>Гарантия (30 дней на Б/У - 1 год на новый)</li>
                                    <li>Trade-in (обмен Вашей техники на новую)</li>
                                    <li>Бесплатная доставка по городу</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.advantages}>
                            <img
                                className={styles['advantages-logo']}
                                src={elcorLogo}
                                alt="images"
                            />

                            <div className={styles['advantages-box']}>
                                <div className={styles['advantages-title']}>
                                    Любим точность во всем:
                                </div>
                                <div className={styles['advantages-content']}>
                                    {advantagesItems.map(({ title, value }) => (
                                        <div className={styles['advantages-item']} key={title}>
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
