require('chromedriver')
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .build();
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})

Object.assign(global, {
  waitUntilURLContains: string => {
    let fn = () => {
      return browser.driver.wait(() => {
        return browser.driver.getCurrentUrl().then((url) => {
          return url.includes(string);
        });
      }, waitDelay);
    }

    return fn.bind(null, string);
  }
});