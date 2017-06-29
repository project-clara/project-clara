import { ProjectClaraPage } from './app.po';

describe('project-clara App', () => {
  let page: ProjectClaraPage;

  beforeEach(() => {
    page = new ProjectClaraPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to cla!!');
  });
});
