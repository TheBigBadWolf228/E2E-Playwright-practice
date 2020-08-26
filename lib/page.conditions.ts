import {wait} from './helpers';
import * as chalk from 'chalk';

function decoratePage(page) {
  const {name} = page;
  Object.getOwnPropertyNames(page.prototype)
      .filter((property) => !!Object
          .getOwnPropertyDescriptor(page.prototype, property).value)
      .filter((property) => property !=='constructor' )
      .filter((property) => typeof page.prototype[property] === 'function')
      .forEach((property) => {
        const originalProp = page.prototype[property];
        page.prototype[property] = async function(...args) {
          let message = `${name} execute ${property}`;
          if (name.includes('Fragment')) {
            message = `\t${message}`;
          }
          console.log(chalk['green'](message));
          await wait(this.page).waitVisibility(this.rootSelector);
          return originalProp.call(this, ...args);
        };
      });
}

export {
  decoratePage,
};
