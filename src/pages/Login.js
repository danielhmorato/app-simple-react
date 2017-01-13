import React from 'react';
import ReactDOM from 'react-dom';
import DocumentTitle from 'react-document-title';
import { Router, Link, browserHistory } from 'react-router';
import Reflux from 'reflux';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';

var Login = React.createClass({
    errorMessage:'',
    mixins: [
        Router.State,
        Router.Navigation,
        Reflux.connect(AuthStore, 'loginStore'),
        Reflux.ListenerMixin
    ],

    componentDidMount () {
        this.listenTo(AuthStore, this._onAuthChange);
    },

    _onAuthChange(auth) {
        this.setState(auth);

        if(this.state.loggedIn){
            var redirectUrl = this.getQuery().redirect || '/';
            this.replaceWith(redirectUrl);
        }
    },

    _handleSubmit(event) {
        event.preventDefault();

        AuthActions.login(
            ReactDOM.findDOMNode(this.refs.username).value,
            ReactDOM.findDOMNode(this.refs.password).value
        );

        this._onAuthChange(AuthStore);
    },

    _handleLogOut(event) {
        event.preventDefault();
        AuthActions.logout();
        this._onAuthChange(AuthStore);
        browserHistory.push('/login');
    },

    _handleClean(event) {
        event.preventDefault();
        ReactDOM.findDOMNode(this.refs.username).value = "";
        ReactDOM.findDOMNode(this.refs.password).value = "";

    },

    _recuperarUsuario () {
        var dados;
        if (AuthStore.loginStore && AuthStore.loginStore != "") {
            dados = JSON.parse(atob(AuthStore.loginStore.split('.')[1]));
        }
        return dados;
    },

    render() {
        if (this.state.error) {
            this.errorMessage = (
                <div className='state-error' style={{ paddingBottom: 16 }}>
                    { this.state.error }
                </div>
            );
        }
        this.state.user = this._recuperarUsuario();
        var formContent;
        if (this.state.user) {
            formContent = (
                <DocumentTitle title="Autenticação">
                    <div className="login">
                        <div id="login-box">
                            <div className="panel">
                                <div className="panel-header">
                                    Login Form
                                    <a className="limpar-form-login" onClick={ this._handleLogOut }>
                                        <i className="limpar-form-login glyphicon glyphicon-remove" style={{'cursor':'pointer'}}></i>
                                    </a>
                                </div>
                                    <div>
                                        <p>
                                            You're logged in as <strong>{ this._recuperarUsuario().name }</strong>.
                                        </p>
                                        <p>
                                            <Link onlyActiveOnIndex={true} to="/">Go</Link>
                                        </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </DocumentTitle>
            );
        } else {
            formContent = (
                <DocumentTitle title="Autenticação">
                    <div className="login">
                        <div id="login-box">
                            <div className="panel">
                                <div className="panel-header">
                                    Login Form
                                    <a className="limpar-form-login" onClick={ this._handleClean } >
                                        <i className="limpar-form-login glyphicon glyphicon-remove" style={{'cursor':'pointer'}}></i>
                                    </a>
                                </div>
                                <div className="panel-body">
                                    <form role="form">
                                        <div className="form-group has-feedback">
                                            <label className="control-label sr-only">Username</label>
                                            <input type="text" className="form-control input-lg" placeholder="Username" ref="username" />
                                            <i className="form-control-feedback glyphicon glyphicon-user"></i>
                                        </div>
                                        <div className="form-group has-feedback">
                                            <label className="control-label sr-only">Username</label>
                                            <input type="password" className="form-control input-lg" placeholder="Password" ref="password" />
                                            <i className="form-control-feedback glyphicon glyphicon-lock"></i>
                                        </div>
                                        <button className="btn btn-zup" onClick={ this.submit }>Sign In</button>
                                        <a href="#" className="link-lost-pass">Lost Your Password?</a>
                                        <div>{ this.errorMessage }</div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </DocumentTitle>
            );
        }
        return (
            <form onSubmit={this._handleSubmit}>
                { formContent }
            </form>
        );
    }
});

module.exports = Login;