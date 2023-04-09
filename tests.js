const { Builder, By } = require("selenium-webdriver");
const assert = require("chai").assert

describe('Login Tests', async function () {

    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://magento.softwaretestingboard.com/");
    });

    afterEach(async function () {
    //        await driver.quit()
    });

    it('Login realizado com sucesso', async function () {
        const botaoSign = await driver.findElement(By.className("authorization-link"))
        await botaoSign.click()

        const campoLogin = await driver.findElement(By.id("email"))
        const campoPassword = await driver.findElement(By.id("pass"))
        const botaoLogin = await driver.findElement(By.id("send2"))

        await campoLogin.sendKeys('eng.civ.frank@gmail.com')
        await campoPassword.sendKeys('@Prod1215')
        await botaoLogin.click()
        await driver.sleep(5000)

        const title = await driver.findElement(By.className('logged-in')).getText()
        assert.equal('Welcome, Frank Lopes!', title)
    }); 
});