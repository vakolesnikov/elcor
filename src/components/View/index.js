import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Map from '../Map';
import './index.css';

export default class View extends React.Component {
    render() {
        return (
            <div className="main-container">
                <Header />
                <Main />
                <Map />
                <Footer />
            </div>
        );
    }
}
