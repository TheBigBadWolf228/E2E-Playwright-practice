class BaseFragment {
  constructor(page, pageRootSelector) {
    this.page = page;
    this.rootSelector = pageRootSelector;
  }
}

module.exports = {
  BaseFragment,
};
