import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header';
import Main from '../Main';
import Catalog from '../Catalog';
import Footer from '../Footer';
import './index.css';

export default class View extends React.Component {
    render() {
        return (
            <div className="main-container">
                <Header />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/catalog" component={Catalog} />
                </Switch>
                <Footer />
            </div>
        );
    }
}
