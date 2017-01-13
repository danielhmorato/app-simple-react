import React from 'react';
import DocumentTitle from 'react-document-title';

import AuthStore from 'stores/AuthStore';

var Home = React.createClass({
    render() {
        return (
            <DocumentTitle title="Home">
                <h1>Aplicativo simples com React.JS</h1>
            </DocumentTitle>
        );
    }
});

module.exports = Home;