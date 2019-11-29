import React from 'react';

import mapMarker from '../../assets/map-marker.png';

export default class Popup extends React.Component {
    render() {
        return (
            <div className="maps">
                <div className="maps_container">
                    <div className="studio-information">
                        <div className="studio-information-title">nёrds design studio</div>
                        <div className="adress">
                            191186, Санкт-Петербург,
                            <br />
                            ул. Б. Конюшенная, д. 19/8
                        </div>
                        <a href="tel:+78122757575">тел. +7 (812) 275-75-75</a>

                        <div className="main-button maps-button">напишите нам</div>
                    </div>
                    <div className="maps-marker">
                        <img src={mapMarker} alt="images" />
                    </div>
                </div>
            </div>
        );
    }
}
