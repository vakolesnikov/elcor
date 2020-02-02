import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { initApp } from './asyncActions';
import reducer from './reducers';

import View from './components/View';
import './normalize.css';

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(initApp());

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <View />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
