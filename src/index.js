import 'styles/base'
import 'jquery';
import 'bootstrap-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import DocumentTitle from 'react-document-title';

var Home = React.createClass({
    render: function() {
        return (
            <DocumentTitle title="Home">
                <h1>Aplicativo simples com React.JS</h1>
            </DocumentTitle>
        );
    }
});

const LoginForm = React.createClass({
    render() {
        return (
            <div className="login">
                <div id="login-box">
                    <div className="panel">
                        <div className="panel-header">
                            Login Form
                            <a className="limpar-form-login" href="#">
                                <i className="limpar-form-login glyphicon glyphicon-remove"></i>
                            </a>
                        </div>
                        <div className="panel-body">
                            <form role="form">
                                <div className="form-group has-feedback">
                                    <label className="control-label sr-only">Username</label>
                                    <input type="text" className="form-control input-lg" placeholder="Username" />
                                    <i className="form-control-feedback glyphicon glyphicon-user"></i>
                                </div>
                                <div className="form-group has-feedback">
                                    <label className="control-label sr-only">Username</label>
                                    <input type="password" className="form-control input-lg" placeholder="Password" />
                                    <i className="form-control-feedback glyphicon glyphicon-lock"></i>
                                </div>
                                <button className="btn btn-zup" href="#">Sign In</button>
                                <a href="#" className="link-lost-pass">Lost Your Password?</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

const LoginPage = React.createClass({
    render() {
        return (
            <DocumentTitle title="Autenticação">
                <LoginForm />
            </DocumentTitle>
        );
    }
});

ReactDOM.render((
    <Router>
        <Route path="/" component={Home} />
        <Route path="/login" component={LoginPage} />
    </Router>
), document.getElementById('app'));
