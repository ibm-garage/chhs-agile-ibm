
describe('Index', function() {
  beforeEach(function() {
    browser.get(browser.baseUrl + '/');
  });

  describe('footer', function() {
    it('is on the index page', function() {
      expect(element(by.tagName('footer')).isPresent()).toBe(true);
    });

    it('has a profile icon', function() {
      expect(element(by.css('.profile-link-xs')).getText()).toContain('person');
    });
  });
});
