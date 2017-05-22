import { CastikoAppPage } from './app.po';

describe('castiko-app App', () => {
  let page: CastikoAppPage;

  beforeEach(() => {
    page = new CastikoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
