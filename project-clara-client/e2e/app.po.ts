import { browser, by, element } from 'protractor';

export class ProjectClaraPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cla-root h1')).getText();
  }
}
