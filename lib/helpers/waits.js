function wait(page) {
  return {
    waitVisibility: (selector) =>
      page.waitForSelector(selector, {state: 'attached'}),
  };
}

module.exports = {
  wait,
};

