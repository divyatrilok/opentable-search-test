import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Provider store={store()}>
        <App />
    </Provider>,
    document.getElementById('root')
);

window.addEventListener('message', e => {
    // clear console messages
    if ('development' !== process.env.NODE_ENV) {
        console.clear();
    }
});

serviceWorker.register();
