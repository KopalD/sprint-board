import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.scss';
import App from './App';
import reducer from './reducers'

import * as serviceWorker from './serviceWorker';

const rootElem = document.getElementById('root');
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App store={store} />
    </Provider>,
    rootElem);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
