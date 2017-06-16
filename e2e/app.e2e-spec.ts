import { CarinaPage } from './app.po';

describe('carina App', () => {
  let page: CarinaPage;

  beforeEach(() => {
    page = new CarinaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
