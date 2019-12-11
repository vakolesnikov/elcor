import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import reducer from './reducers';

import View from './components/View';
// import './normalize.css';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <View />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
