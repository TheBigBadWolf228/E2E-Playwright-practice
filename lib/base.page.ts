class BasePage {
  page;
  rootSelector;
  constructor(page, pageRootSelector) {
    this.page = page;
    this.rootSelector = pageRootSelector;
  }

  _replacePage(page) {
    const excludeProps = ['page', 'rootSelector'];
    this.page = page;
    const expectedProps = Object.getOwnPropertyNames(this)
        .filter((p) => !excludeProps.includes(p));

    expectedProps.forEach((p) => {
      this[p]._replacePage.call(this[p], page);
    });
  }
}

export {
  BasePage,
};
