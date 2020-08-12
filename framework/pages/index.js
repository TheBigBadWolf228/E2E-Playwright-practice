const signIn = require('./signIn');
const account = require('./account');

module.exports = {
  ...signIn,
  ...account,
};
