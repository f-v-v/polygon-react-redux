import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './cpmponents/app';
import {Provider} from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';  
// import {BrowserRouter as Router} from 'react-router-dom';  
import store from './store';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
            <Provider store = {store}>
                <Router>
                    <App />
                </Router>
            </Provider>
            , document.getElementById('root'));

// serviceWorker.unregister();
