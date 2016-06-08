
describe('Search', function() {
  beforeEach(function() {
    browser.get(browser.baseUrl + '/#/search');
  });

  it('Zip Code', function() {
    expect(browser.getTitle()).toEqual('CHHS');
  });

  it('has a text box for the zip code', function() {
    expect(element(by.css('.zipcodes')).isPresent()).toBe(true);
  });

  it('finds the search button', function() {
    var myEle = element(by.cssContainingText('.material-icons', 'arrow_forward'));
    expect(myEle.isPresent()).toBe(true);
  });

  it('clicks the search button', function() {
    var zipCodes = element(by.model('zipcodes')).sendKeys('92553');
    element(by.css('[ng-click="myForm.$valid && searchZipCodes()"]')).click();

    var address = "12730 HEACOCK ST. SUITE 9";
    expect(element(by.css('.address')).getText()).toContain(address);
  });
});
