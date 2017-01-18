import React from 'react';
import { Router, Link, browserHistory } from 'react-router';
import Reflux from 'reflux';
import AuthActions from 'actions/AuthActions';

var MenuNav = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    handleLogout(e) {
        e.preventDefault();
        AuthActions.logout();
        var _self = this;
        setTimeout(function () {
            _self.context.router.push('/login');
        }, 200);
    },
    render(){
        return(
            <div>
                <nav className="navbar navbar-default navbar-zup">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">APP React Simples</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/escola">Escola</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><a href='#' onClick={this.handleLogout}>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = MenuNav;