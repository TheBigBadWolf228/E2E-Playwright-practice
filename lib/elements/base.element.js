const {wait} = require('../helpers');
const chalk = require('chalk');

class BaseElement {
  constructor(page, selector, elementName) {
    this.page = page;
    this.selector = selector;
    this.currentElement = null;
    this.elementName = elementName;
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
            if (!baseElement.elementName) {
              baseElement.elementName = `BaseElement`;
            }
            let message = `\t\t\t ${baseElement.elementName} execute ${value}`;
            if (args.length) {
              message = `${message} with arguments ${JSON.stringify(args)}`;
            }
            console.log(chalk.green(message));
            return currentElement[value].call(currentElement, ...args);
          });
    },
  });
}

module.exports = {
  $element,
};
