import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header';
import Main from '../Main';
import Products from '../Products';
import Footer from '../Footer';
import style from './index.css';

export default class View extends React.Component {
    render() {
        return (
            <div className={style['main-container']}>
                <div className={style.content}>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/products/:id" component={Products} />
                    </Switch>
                    <Footer />
                </div>
            </div>
        );
    }
}
