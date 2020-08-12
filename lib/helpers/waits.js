function wait(page) {
  return {
    waitVisibility: (selector) =>
      page.waitForSelector(selector, {state: 'visible'}),
  };
}

module.exports = {
  wait,
};

