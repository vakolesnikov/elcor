import React from 'react';

import styles from '../Main/index.css';

const Map = () => (
    <div className={styles.maps}>
        <div className={styles['maps-container']}>
            <div className={styles['store-information']}>
                <div className={styles['store-information-title']}>Elcor</div>
                <div className={styles.adress}>
                    440000, Пенза,
                    <br />
                    ул. Кирова, д. 73, <br />
                    тц. ЦУМ
                </div>
                <a className={styles['store-information-tel']} href="tel:+79631033030">
                    тел. +7 (963)103-30-30
                </a>

                <a
                    className={`${styles['main-button']} ${styles['maps-button']}`}
                    href="https://vk.com/im?media=&sel=-120354441"
                >
                    напишите нам
                </a>
            </div>
            <iframe
                title="map"
                className={styles.map}
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab43e95893f62db9a4383483d248223f81c357e5642e5bfe6dd2653df96469123&amp;source=constructor"
                height="400"
                frameBorder="0"
            />
        </div>
    </div>
);

export default Map;
