var cfenv = require('cfenv');

describe('Search', function() {

  beforeEach(function(){
    browser.get(cfenv.getAppEnv().url + '#/search');
  });

  it('Zip Code', function() {

    expect(browser.getTitle()).toEqual('CHHS');
  });

  it('has a text box for the zip code', function(){
    expect(element(by.css('.zipcodes')).isPresent()).toBe(true);
  });

  it('clicks the search button', function(){

    var myEle =element(by.css('.search-button'));
    expect(myEle.isPresent()).toBe(true);

    var zipCodes = element(by.model('zipcodes')).sendKeys('92553');
    element(by.css('[ng-click="searchZipCodes()"]')).click();

    var address = '12968 Frederick St Ste D Moreno Valley, CA 92553';
    expect(element(by.css('.address')).getText()).toContain(address);
  });

});