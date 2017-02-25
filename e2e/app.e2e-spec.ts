import { NejappPage } from './app.po';

describe('nejapp App', () => {
  let page: NejappPage;

  beforeEach(() => {
    page = new NejappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
