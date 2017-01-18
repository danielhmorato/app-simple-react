import React from 'react';
import Router from 'react-router';

import AuthStore from '../stores/AuthStore';

var VerificaAutenticacao = React.createClass({
    statics: {
        onEnter(next, transition) {
            if(!AuthStore.loggedIn()){
                transition('/login');
            }
        }
    },
    render () {
        return (
            <Router.RouteHandler/>
        );
    }
});

module.exports = { VerificaAutenticacao };