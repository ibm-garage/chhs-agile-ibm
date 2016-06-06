var cfenv = require('cfenv');
require('dotenv').config();
var host;
beforeEach(function(){

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
    expect(element(by.id('profile-link')).getText()).toContain('person');
  });

  describe('clicks profile', function(){

    beforeEach(function(){
      browser.get(host + '/#/search');
      console.log('host me: '+host);
    });

    it('loads the search page', function(){
      expect(element(by.css('.md-toolbar-tools')).getText()).toContain('Search');
    });

    it('goes to the profile page', function(){
      var profileIcon = element(by.cssContainingText('.material-icons', 'person')).click();
      expect(element(by.css('.md-toolbar-tools')).getText()).toContain('Profile');
    });
  });
});