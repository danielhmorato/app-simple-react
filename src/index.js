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
import Login from './pages/Login';

ReactDOM.render((
    <Router>
        <Route path="/" component={Main} history={browserHistory} >
            <IndexRoute component={Home} />
            <Route path="/escola" component={Escola} />
            <Route path="/about" component={About} />
        </Route>
        <Route path="/login" component={Login} />
    </Router>
), document.getElementById('app'));



