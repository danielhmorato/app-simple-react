import 'styles/base'
import 'jquery';
import 'bootstrap-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import {Home} from './pages/Home';
import {Login} from './pages/Login';
import {LoginRequired} from './util/RouteHelpers'

ReactDOM.render((
    <Router>
        <Route>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
        </Route>
    </Router>
), document.getElementById('app'));



