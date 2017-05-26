import { CastikoPage } from './app.po';

describe('castiko App', () => {
  let page: CastikoPage;

  beforeEach(() => {
    page = new CastikoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
