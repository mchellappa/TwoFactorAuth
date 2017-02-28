import { TwoFactorAuthPage } from './app.po';

describe('two-factor-auth App', function() {
  let page: TwoFactorAuthPage;

  beforeEach(() => {
    page = new TwoFactorAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
