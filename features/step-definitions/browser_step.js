const seleniumWebdriver = require('selenium-webdriver')
const {defineSupportCode} = require('cucumber')

defineSupportCode(function({Given, When, Then}) {
  Given('I am on the Turbina webapp', function () {
    return this.driver.get('https://itaudev.icolabora.com.br')
  })

  When('I fill my username as {string}', function (username) {
    return this.driver.findElement({id: 'username'}).then(function(element){
      return element.sendKeys(username)
    })
  });

  When('my password as {string}', function (password) {
    return this.driver.findElement({id: 'password'}).then(function(element){
      return element.sendKeys(password)
    })
  });

  When('press login button', function () {    
    return this.driver.findElement({id: 'loginBtn'}).then(function(element){
      return element.click()
    })
  })

  Then('I should see {string} as title page', function (string) {
    return waitUntilURLContains('dashboards')
  })
})