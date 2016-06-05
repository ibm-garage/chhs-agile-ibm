var cfenv = require('cfenv');
require('dotenv').config();

describe('Search', function() {

  beforeEach(function(){
    var host;
    var EC = protractor.ExpectedConditions;

    browser.ignoreSynchronization = true;


    if(process.env.DEVELOPMENT) {
      host = cfenv.getAppEnv().url;
    } else {
      host = "http://" + process.env.STAGING;
    }
    //console.log('host '+host );

    browser.get(host + '/#/search');

    var body = $(".body-is-loaded");

    browser.wait(EC.presenceOf(body), 10000).then(function () {
      browser.ignoreSynchronization = false;
    });

    //browser.waitForAngular();


  });

  it('Zip Code', function() {
    expect(browser.getTitle()).toEqual('CHHS');
  });

  it('has a text box for the zip code', function(){
    expect(element(by.css('.zipcodes')).isPresent()).toBe(true);
  });

  it('finds the search button', function(){
    var myEle = element(by.cssContainingText('.material-icons', 'arrow_forward'));
    expect(myEle.isPresent()).toBe(true);
  });

  it('clicks the search button', function(){
    var zipCodes = element(by.model('zipcodes')).sendKeys('92553');
    element(by.css('[ng-click="searchZipCodes()"]')).click();

    var address = "12730 HEACOCK ST. SUITE 9";
    expect(element(by.css('.address')).getText()).toContain(address);
  });

});