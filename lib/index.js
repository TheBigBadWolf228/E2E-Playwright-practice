const helpers = require('./helpers');
const pageConditions = require('./page.conditions');
const basePage = require('./base.page');
const baseFragment = require('./base.fragment');
const elements = require('./elements');

module.exports = {
  ...helpers,
  ...pageConditions,
  ...basePage,
  ...baseFragment,
  ...elements,
};

