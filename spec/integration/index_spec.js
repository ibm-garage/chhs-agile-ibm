var cfenv = require('cfenv');
require('dotenv').config();
var host;
beforeEach(function(){

  //browser.ignoreSynchronization = true;

  if(process.env.DEVELOPMENT) {
    host = cfenv.getAppEnv().url;
  } else {
    host = "http://" + process.env.STAGING;
  }
  //console.log('host '+host );
  browser.get(host + '/');
});

describe('footer', function(){
  it('is on the index page', function() {
    expect(element(by.tagName('footer')).isPresent()).toBe(true);
  });

  it('has a profile icon', function () {
    expect(element(by.css('.profile-link-xs')).getText()).toContain('person');
  });

});