function makeSingleton(Page, ...args) {
  if (Page.__instance) {
    return Page.__instance;
  }
  const page = new Page(...args);
  Page.__instance = page;
  return Page.__instance;
}

module.exports = {
  makeSingleton,
};
