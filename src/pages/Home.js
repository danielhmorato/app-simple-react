import React from 'react';
import DocumentTitle from 'react-document-title';
import AuthStore from 'stores/AuthStore';

var Home = React.createClass({
    getInitialState() {
        if (AuthStore.getState().loggedIn) {
            window.location = '/#/login'
        }
        return { /* initial state */ };
    },
    render() {
        return (
            <DocumentTitle title="Home">
                <h1>Aplicativo simples com React.JS</h1>
            </DocumentTitle>
        );
    }
});

module.exports = Home;