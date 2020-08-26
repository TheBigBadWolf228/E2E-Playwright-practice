import {wait} from '../helpers';
import * as  chalk from 'chalk';


class BaseElement {
  page;
  selector;
  currentElement;
  elementName;
  constructor(page, selector, elementName?) {
    this.page = page;
    this.selector = selector;
    this.currentElement = null;
    this.elementName = elementName;
  }

  _replacePage(page) {
    this.page = page;
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

function $element(page, selector, elementName?) {
  const baseElement = new BaseElement(page, selector, elementName);
  return new Proxy(baseElement, {
    get(_t, value) {
      if (value=== '_replacePage') {
        return (page) => baseElement._replacePage(page);
      }
      return (...args) => baseElement
          .initThisElement().then((currentElement) => {
            if (!baseElement.elementName) {
              baseElement.elementName = `BaseElement`;
            }
            let message = `\t\t\t ${baseElement.elementName} execute ${value as string}`;
            if (args.length) {
              message = `${message} with arguments ${JSON.stringify(args)}`;
            }
            console.log(chalk['green'](message));
            return currentElement[value].call(currentElement, ...args);
          });
    },
  });
}

export {
  $element,
};
