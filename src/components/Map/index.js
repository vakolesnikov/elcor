import React from 'react';

import styles from '../View/index.css';

export default class Map extends React.Component {
    render() {
        return (
            <div className={styles.maps}>
                <div className={styles.maps_container}>
                    <div className={styles['studio-information']}>
                        <div className={styles['studio-information-title']}>Eckor</div>
                        <div className={styles.adress}>
                            440000, Пенза,
                            <br />
                            ул. Кирова, д. 73, <br />
                            тц. ЦУМ
                        </div>
                        <a href="tel:+79631033030">тел. +7 (963)103-30-30</a>

                        <div className={styles['main-button maps-button']}>напишите нам</div>
                    </div>
                    <iframe
                        title="map"
                        className={styles.map}
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab43e95893f62db9a4383483d248223f81c357e5642e5bfe6dd2653df96469123&amp;source=constructor"
                        width="1200"
                        height="400"
                        frameBorder="0"
                    />
                </div>
            </div>
        );
    }
}
