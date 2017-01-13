import Reflux from 'reflux';
import Actions from 'actions/AuthActions';

var renderTimeout = 250; // set a timeout to simulate async response time

var AuthStore = Reflux.createStore({
  listenables: Actions,

  init () {
    // pull cached token if one exists
    this.loginStore = localStorage.getItem('loginStore');

    this.claims = this.parseLoginStore();
    this.error = false;
    this.loading = false;
  },

  getState () {
    return {
      loading: this.loading,
      error: this.error,
      user: this.userFromClaims(),
      loggedIn: this.loggedIn()
    };
  },

  userFromClaims () {
    // will want to do some cleanup of the claims
    // because they're designed to be very small field names for xfer size
    return this.claims;
  },

  loggedIn () {
    // helper
    return this.claims !== null;
  },

  changed () {
    this.trigger(this.getState());
  },

  onLogin (username, password) {
    this.loading = true;
    this.changed();

    // fake API simulation
    setTimeout(function() {
      var auths = require('./passwords.json');
      Actions.login.completed(auths[`${username}:${password}`]);
    }, renderTimeout);
  },

  onLoginCompleted (authResponse) {
    if(authResponse){
      this.loginStore = authResponse.loginStore;
      this.claims = this.parseLoginStore();
      this.error = false;

      localStorage.setItem('loginStore', this.loginStore);
    } else {
      this.error = 'Username or password invalid.';
    }

    this.loading = false;
    this.changed();
  },

  onLogout () {
    // clear it all
    this.loginStore = null;
    this.claims = null;
    this.error = false;
    this.loading = false;
    localStorage.removeItem('loginStore');
  },

  parseLoginStore () {
    if(this.loginStore === null){ return null; }
    return JSON.parse(atob(this.loginStore.split('.')[1]));
  }

});

module.exports = AuthStore;