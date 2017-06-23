import { PropellingClientPage } from './app.po';

describe('propelling-client App', () => {
  let page: PropellingClientPage;

  beforeEach(() => {
    page = new PropellingClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to pro!!');
  });
});
