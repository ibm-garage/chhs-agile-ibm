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

describe('Messages List', function(){

  beforeEach(function(){
    browser.get(host + '/#/inbox');
  });

  it('should load Inbox', function() {
    expect(element(by.css('.md-toolbar-tools')).getText()).toContain('Inbox');
  });

  it('should render 2 messages', function() {
    var inbox_list = element.all(by.repeater('inbox in inboxData'));
    expect(inbox_list.count()).toBe(2);
  });

  it('should render a message with title', function() {
    var inbox_list = element.all(by.repeater('inbox in inboxData'));
    expect(inbox_list.get(0).getText()).toContain('Welcome\nFrom: Francis');
  });

  it('has a profile icon', function() {
    expect(element(by.cssContainingText('md-list-item', 'account_circle')).isPresent()).toBe(true);
  });

  xit('has a compose button', function() {
    expect(element(by.css('.md-raised.md-warn')).isPresent()).toBe(true);
  });


});
