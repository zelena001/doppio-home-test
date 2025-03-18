exports.config = {
    runner: 'local',
    path: '/', // Use / for Appium 2.x
    port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:appPackage': 'com.ebay.mobile',
        'appium:appActivity': 'com.ebay.mobile.activities.MainActivity',
        'appium:automationName': 'UiAutomator2',
        'appium:noReset': true,
        "appium:autoLaunch": true,
    }],
    logLevel: 'info',
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};