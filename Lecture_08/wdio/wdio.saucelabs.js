const { config } = require('./wdio.conf')

exports.config = Object.assign({}, config, {
  user: ``, // SAUCE_USERNAME
  key: ``, // SAUCE_ACCESS_KEY
  hostname: 'ondemand.eu-central-1.saucelabs.com',
  port: 443,
  services: ['sauce'],
  capabilities: [
    {
      browserName: 'chrome',
      platformName: 'Windows 10',
      browserVersion: 'latest',
      'sauce:options': { screenResolution: '1600x1200' },
    },

    {
      browserName: 'firefox',
      browserVersion: 'latest',
      platformName: 'Windows 11',
      'sauce:options': { screenResolution: '1920x1080' },
    },
  ],

  afterTest: async function (test, context, { error, result, duration, passed, retries }) {
    await browser.execute(`sauce:job-result=${passed ? 'passed' : 'failed'}`)
  },
})
