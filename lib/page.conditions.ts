import {wait} from './helpers';
import * as chalk from 'chalk';

function decoratePage(page) {
  const name = page.id || page.__proto__.constructor.name;

  Object.getOwnPropertyNames(page.__proto__)
      .filter((property) => !!Object
          .getOwnPropertyDescriptor(page.__proto__, property).value)
      .filter((property) => property !=='constructor' )
      .filter((property) => typeof page.__proto__[property] === 'function')
      .forEach((property) => {
        const originalProp = page.__proto__[property];
        page.__proto__[property] = async function(...args) {
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
