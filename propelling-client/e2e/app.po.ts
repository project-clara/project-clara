import { browser, by, element } from 'protractor';

export class PropellingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pro-root h1')).getText();
  }
}
