const {wait} = require('./helpers');

function decoratePage(page) {
  const ownProps = Object.getOwnPropertyNames(page.prototype)
      .filter((property) => {
        const descriptor = Object
            .getOwnPropertyDescriptor(page.prototype, property);
        return !!descriptor.value;
      });

  ownProps
      .filter((property) => property !=='constructor' )
      .filter((property) => typeof page.prototype[property] === 'function')
      .forEach((property) => {
        const originalProp = page.prototype[property];
        page.prototype[property] = async function(...args) {
          await wait(this.page).waitVisibility(this.rootSelector);
          return originalProp.call(this, ...args);
        };
      });
}

module.exports = {
  decoratePage,
};
