const {SignInPage, AccountPage} = require('./pages');
const {makeSingleton} = require('../lib');

const pageProvider = (...args) => ({
  signIn: () => makeSingleton(SignInPage, ...args),
  account: () => makeSingleton(AccountPage, ...args),
});

module.exports = {
  pageProvider,
};

