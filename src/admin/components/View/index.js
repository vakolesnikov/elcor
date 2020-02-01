import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductForm from '../ProductForm';
import { Navigation } from '../Navigation';
import Header from '../Header';
import style from './index.css';
import Home from '../Home';
import ProductList from '../ProductList';

export default class View extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <div className={style['main-container']}>
                    <Navigation />
                    <div className={style['content-box']}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/product_list" component={ProductList} />
                            <Route
                                exact
                                path="/add_product"
                                component={() => <ProductForm actionType="add_product" />}
                            />
                            <Route
                                exact
                                path="/update_product"
                                component={() => <ProductForm actionType="update_product" />}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}
