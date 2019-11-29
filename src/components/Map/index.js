import React from 'react';

import mapMarker from '../../assets/map-marker.png';

export default class Map extends React.Component {
    render() {
        return (
            <div className="maps">
                <div className="maps_container">
                    <div className="studio-information">
                        <div className="studio-information-title">Elkor</div>
                        <div className="adress">
                            440000, Пенза,
                            <br />
                            ул. Кирова, д. 73, <br />
                            тц. ЦУМ
                        </div>
                        <a href="tel:+79631033030">тел. +7 (963)103-30-30</a>

                        <div className="main-button maps-button">напишите нам</div>
                    </div>
                    <iframe
                        title="map"
                        className="map"
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
