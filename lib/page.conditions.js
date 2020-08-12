const {wait} = require('./helpers');

function decoratePage(page) {
  const ownProps = Object.getOwnPropertyNames(page);

  ownProps
      .filter((property) => property !=='constructor' )
      .filter((property) => typeof page[property] === 'function')
      .forEach((property) => {
        const originalProp = page[property];
        page[property] = async function(...args) {
          await wait(this.page).waitVisibility(this.rootSelector);
          return originalProp.call(this, ...args);
        };
      });
}

module.exports = {
  decoratePage,
};
