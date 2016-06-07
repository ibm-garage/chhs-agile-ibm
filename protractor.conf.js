// Config for protractor tests
const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();
require('dotenv').config();

var baseUrl = process.env.DEVELOPMENT ? cfenv.getAppEnv().url : process.env.STAGING;
console.log('Testing server at ' + baseUrl);

exports.config = {
  baseUrl: baseUrl,
  framework: 'jasmine',
  specs: ['spec/integration/**/*_spec.js'],
  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': require('phantomjs-prebuilt').path,
    'phantomjs.cli.args': ['--web-security=false', '--ignore-ssl-errors=true', '--webdriver-loglevel=DEBUG']
  },
  seleniumServerJar: 'spec/support/selenium-server-standalone-2.53.0.jar'
};
