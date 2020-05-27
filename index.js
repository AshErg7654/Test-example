const { Builder, By, Key, until } = require('selenium-webdriver');

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    await driver.get('https://market.yandex.ru/');
    await driver.findElement(By.css("div._381y5orjSo:nth-child(1) > div:nth-child(3) > div:nth-child(1) > a:nth-child(1)")).click().catch;
    await driver.findElement(By.css("body > div.main > div.n-scroll-through.i-bem > div:nth-child(6) > div > div > div > div.sxrttPxJA0.a6VijDBKnU > div > div > div > div > div > div > div:nth-child(3) > div._3VMnEHDoVX > ul > li:nth-child(1) > div > a")).click().catch;
}  
example();

// driver.findElement(By.id("glpriceto")).sendKeys("50000").click();