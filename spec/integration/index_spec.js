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

  describe('clicking profile from search', function(){

    beforeEach(function(){
      browser.get(host + '/#/search');
      //console.log('host me: '+host);
      element(by.cssContainingText('.material-icons', 'person')).click();
    });

    it('goes to the profile page', function(){
      expect(element(by.css('.md-toolbar-tools')).getText()).toContain('Profile');
    });
  });

  describe('clicking search from profile', function(){
    beforeEach(function(){
      browser.get(host + '/#/profile');
      //console.log('host me: '+host);
      element(by.cssContainingText('.material-icons', 'search')).click();
    });

    it('loads the search page', function(){
      expect(element(by.css('.md-toolbar-tools')).getText()).toContain('Search');
    });
  });
});