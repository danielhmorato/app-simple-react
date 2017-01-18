import React from 'react';
import DocumentTitle from 'react-document-title';

var Home = React.createClass({
    render() {
        return (
            <DocumentTitle title="Página inicial">
                <h1>Seja Bem Vindo!</h1>
            </DocumentTitle>
        );
    }
});

module.exports = Home;