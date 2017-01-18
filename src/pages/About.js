import React from 'react';
import DocumentTitle from 'react-document-title';

var About = React.createClass({
    render() {
        return (
            <DocumentTitle title="Sobre o App">
                <h1>About</h1>
            </DocumentTitle>
        );
    }
});

module.exports = About;