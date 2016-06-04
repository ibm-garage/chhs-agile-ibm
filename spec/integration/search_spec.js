var cfenv = require('cfenv');
require('dotenv').config();

describe('Search', function() {

  beforeEach(function(){
    var host;

    var EC = protractor.ExpectedConditions;

    browser.ignoreSynchronization = true;
    browser.get('/');

    // wait for deferred bootstrap body to not be present
    var body = $("body.deferred-bootstrap-loading");
    browser.wait(EC.stalenessOf(body), 10000).then(function () {
      browser.ignoreSynchronization = false;
    });
    browser.waitForAngular();  // might not be needed

    ///environment urls
    if(process.env.DEVELOPMENT) {
      host = cfenv.getAppEnv().url;
    } else {
      host = "http://" + process.env.STAGING;
    }
    console.log('host '+host );

    browser.get(host + '/#/search');
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