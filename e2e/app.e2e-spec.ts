import { InToGearPage } from './app.po';

describe('in-to-gear App', () => {
  let page: InToGearPage;

  beforeEach(() => {
    page = new InToGearPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
