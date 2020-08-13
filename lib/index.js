const helpers = require('./helpers');
const pageConditions = require('./page.conditions');
const basePage = require('./base.page');
const baseFragment = require('./base.fragment');

module.exports = {
  ...helpers,
  ...pageConditions,
  ...basePage,
  ...baseFragment,
};

