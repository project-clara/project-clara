import { PropellingPage } from './app.po';

describe('propelling App', () => {
  let page: PropellingPage;

  beforeEach(() => {
    page = new PropellingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to pro!!');
  });
});
