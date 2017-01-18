import 'styles/base'
import 'jquery';
import 'bootstrap-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './pages/Main';
import Home from './pages/Home';
import Escola from './pages/Escola';
import About from './pages/About';
import {Login, LoginRequired} from './pages/Login';

ReactDOM.render((
    <Router>
        <Route history={browserHistory}>
            <Route handler={LoginRequired}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Home} />
                    <Route path="/escola" component={Escola} />
                    <Route path="/about" component={About} />
                </Route>
            </Route>
            <Route path="/login" component={Login} />
        </Route>
    </Router>
), document.getElementById('app'));



