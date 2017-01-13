import React, {Component} from 'react';
import { Link, browserHistory } from 'react-router';

var Main = React.createClass({
    /*getInitialState() {
        if (!AuthStore.getState().loggedIn) {
            browserHistory.push('/login');
        }
        return {};
    },*/
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">APP React Simples</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/escola">Escola</Link></li>
                                <li><Link to="/about">About</Link></li>
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

module.exports = Main;