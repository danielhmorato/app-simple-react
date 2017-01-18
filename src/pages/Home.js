import React from 'react';
import DocumentTitle from 'react-document-title';

var Home = React.createClass({
    render() {
        return (
            <DocumentTitle title="Página inicial">
                <h1>Home</h1>
            </DocumentTitle>
        );
    }
});

module.exports = Home;