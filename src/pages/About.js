import React from 'react';
import DocumentTitle from 'react-document-title';

var About = React.createClass({
    render() {
        return (
            <DocumentTitle title="Sobre o App">
                <div>
                    <h1>Aplicativo simples com React.JS - app-simple-react</h1>

                    <h4>Componentes Principais</h4>
                    <ul>
                        <li>React.JS</li>
                        <li>Route React</li>
                        <li>Reflux</li>
                    </ul>
                    <h4>Tarefas automatizadas</h4>
                    <ul>
                        <li>Gulp</li>
                        <li>Webpack</li>
                    </ul>
                    <h4>Transpilações</h4>
                    <ul>
                        <li>Babel</li>
                        <li>SASS</li>
                    </ul>
                    <h4>Execucao do projeto:</h4>
                    <ul>
                        <li>npm install && npm start</li>
                    </ul>
                </div>
            </DocumentTitle>
        );
    }
});

module.exports = About;