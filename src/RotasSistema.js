import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MenuNav from './pages/MenuNav';
import Home from './pages/Home';
import Escola from './pages/Escola';
import About from './pages/About';
import Login from './pages/Login';
import {VerificaAutenticacao} from './util/VerificaAutenticacao';

var RotasSistema = React.createClass({
    render () {
        return (
            <Router>
                <Route history={browserHistory}>
                    <Route handler={VerificaAutenticacao} onEnter={VerificaAutenticacao.onEnter}>
                        <Route path="/" component={MenuNav}>
                            <IndexRoute component={Home} />
                            <Route path="/escola" component={Escola} />
                            <Route path="/about" component={About} />
                        </Route>
                    </Route>
                    <Route path="/login" component={Login} />
                </Route>
            </Router>
        );
    }
});

module.exports = RotasSistema;

