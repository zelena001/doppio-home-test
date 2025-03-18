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
        
        'appium:automationName': 'UiAutomator2',
        'appium:noReset': true,
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