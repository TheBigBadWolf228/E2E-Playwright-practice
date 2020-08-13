const {wait} = require('../helpers');

class BaseElement {
  constructor(page, selector) {
    this.page = page;
    this.selector = selector;
    this.currentElement = null;
  }

  async initThisElement() {
    await wait(this.page).waitVisibility(this.selector);
    if (this.currentElement) {
      return this.currentElement;
    } else {
      const element = await this.page.$(this.selector);
      this.currentElement = element;
      return this.currentElement;
    }
  }
}

function $element(page, selector) {
  const baseElement = new BaseElement(page, selector);
  return new Proxy(baseElement, {
    get(_t, value) {
      return (...args) => baseElement
          .initThisElement().then((currentElement) => {
            return currentElement[value].call(currentElement, ...args);
          });
    },
  });
}

module.exports = {
  $element,
};
