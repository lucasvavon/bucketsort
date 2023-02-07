const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to Url
        await driver.get('https://www.epsi.fr');

        // Enter text "webdriver" and perform keyboard action "Enter"
        //await driver.findElement(By.name('q')).sendKeys('webdriver', Key.ENTER);
        const element = await driver.findElement(By.className('elementor-heading-title elementor-size-default')).getText();
        console.log(element);
    }
    finally {
        await driver.quit();
    }
})();