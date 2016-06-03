// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/integration/**/*.js'],
  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': require('phantomjs-prebuilt').path,
    'phantomjs.cli.args': ['--web-security=false', '--ignore-ssl-errors=true', '--webdriver-loglevel=DEBUG'],
  }
};