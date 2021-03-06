import {wait} from '../helpers';
import * as  chalk from 'chalk';
import {allureInterfaceStep} from '../page.conditions';

const {ALLURE} = process.env;

class BaseElement {
  page;
  selector;
  currentElement;
  id;
  constructor(page, selector, elementName?) {
    this.page = page;
    this.selector = selector;
    this.currentElement = null;
    this.id = elementName;
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
            if (!baseElement.id) {
              baseElement.id = `BaseElement`;
            }

            let message = `\t\t${baseElement.id} execute ${value as string}`;
            if (args.length) {
              message = `${message} with arguments ${JSON.stringify(args)}`;
            }

            if(ALLURE) {
              return allureInterfaceStep(message, currentElement[value].bind(currentElement, ...args));
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
