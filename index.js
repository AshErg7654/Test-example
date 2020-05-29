const { Builder, By, Key, until } = require('selenium-webdriver');

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.manage().window().maximize();
        await driver.manage().
        await driver.get('https://market.yandex.ru/');
        await driver.findElement(By.css("div._381y5orjSo:nth-child(1) > div:nth-child(3) > div:nth-child(1) > a:nth-child(1)")).click();
        await driver.wait(until.elementLocated(By.css("div._1YdrMWBuYy:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1) > a:nth-child(1)"))).click();
        await driver.wait(until.elementLocated(By.id("glpriceto"))).sendKeys('50000');
        await driver.wait(until.elementLocated(By.css("div._3_phr-spJh:nth-child(6) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > div:nth-child(1) > label:nth-child(1)"))).click();
        await driver.sleep(3000);
        await driver.wait(until.elementLocated(By.css("div.n-filter-sorter:nth-child(4) > a:nth-child(1)"))).click();
        await driver.wait(until.elementLocated(By.css("#product-536916121 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)"))).click();
        //await driver.sleep(3000);
        //await driver.wait(until.elementLocated(By.css("#product-115757665 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)"))).click();
        //await driver.wait(until.elementLocated(By.css("#product-72820345 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)"))).click();
        //await driver.wait(until.elementLocated(By.css("#product-1818938894 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)"))).click();
        // await driver.wait(until.elementLocated(By.css("#product-187376376 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)"))).click();
        // await driver.wait(until.elementLocated(By.css("body > div.popup-informer.i-bem.popup-informer_js_inited > div > div > div.popup-informer__controls > a"))).click();
    } catch(e) {
        console.error(e)
    }
}  
example();

