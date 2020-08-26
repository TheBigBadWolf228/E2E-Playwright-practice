export function wait(page) {
  return {
    waitVisibility: (selector) =>
      page.waitForSelector(selector, {state: 'attached'}),
  };
}

