function makeSingleton(PagePo, ctxPage) {
  if (PagePo.__instance) {
    PagePo.__instance._replacePage.call(PagePo.__instance, ctxPage);
    return PagePo.__instance;
  }

  const page = new PagePo(ctxPage);
  PagePo.__instance = page;
  return PagePo.__instance;
}

module.exports = {
  makeSingleton,
};
