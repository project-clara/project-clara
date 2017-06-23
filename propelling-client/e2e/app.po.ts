import { browser, by, element } from 'protractor';

export class PropellingClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pro-root h1')).getText();
  }
}
