const {SignInPage, AccountPage} = require('./pages');
const {makeSingleton} = require('../lib');

const pageProvider = (page) => ({
  signIn: () => makeSingleton(SignInPage, page),
  account: () => makeSingleton(AccountPage, page),
});

module.exports = {
  pageProvider,
};

