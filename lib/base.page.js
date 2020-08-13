class BasePage {
  constructor(page, pageRootSelector) {
    this.page = page;
    this.rootSelector = pageRootSelector;
  }
}

module.exports = {
  BasePage,
};
