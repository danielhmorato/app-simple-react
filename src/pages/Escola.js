import React from 'react';
import DocumentTitle from 'react-document-title';
import AuthStore from '../stores/AuthStore';

var Escola = React.createClass({
    getInitialState() {
        if (!AuthStore.getState().loggedIn) {
            window.location = '/#/login'
        }
        return {};
    },
    getListEscolas () {
        return require('../dados/escolas.json');
    },
    render() {
        return (
            <DocumentTitle title="Escolas">
                <LoginRequired/>
                <Menu/>
                <h1>Aplicativo simples com React.JS</h1>
            </DocumentTitle>
        );
    }
});

module.exports = Escola;