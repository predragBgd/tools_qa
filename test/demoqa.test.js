// "use strict";

require("chromedriver");
const webdriver = require("selenium-webdriver");
const { By, Key, until } = require("selenium-webdriver");
const { assert, expect } = require("chai");
const HomePage = require("../pages/home.page");
const ElementsPage = require("../pages/elements.page");
const TextBoxPage = require("../pages/textBox.page");
const RadioButtonPage = require("../pages/radioButon.page");

describe("shop.QA.rs tests", function () {
  let driver;
  let homePage;
  let elementsPage;
  let textBoxPage;
  let radioButtonPage;

  before(() => {
    driver = new webdriver.Builder().forBrowser("chrome").build();
    homePage = new HomePage(driver);
    elementsPage = new ElementsPage(driver);
    textBoxPage = new TextBoxPage(driver);
    radioButtonPage = new RadioButtonPage(driver);
  });

  after(async () => {
    await driver.sleep(3000);
    await driver.quit();
  });

  it("Verify homepage is open", async function () {
    await homePage.goToHomePage();
    const pageTitle = await homePage.getPageTitle();
    expect(pageTitle).to.contain("ToolsQA");
  });
  it("Submit Text Box", async () => {
    await homePage.getElementsBtn();
    expect(await elementsPage.getPageMainTitle()).to.eq("Elements");
    await elementsPage.goToTextBoxPage();
    expect(await textBoxPage.getPageMainTitle()).to.eq("Text Box");
    await textBoxPage.getUserData();
    await textBoxPage.getSubmitBtn();
    // expect(await textBoxPage.getOutputName()).to.eq("Name:Blagoje Mitić");
    expect(await textBoxPage.getOutputName()).to.be.true;
  });
  it("Click Radio Button", async () => {
    await elementsPage.goToRadioButtonPage();
    expect(await radioButtonPage.getPageMainTitle()).to.eq("Radio Button");
    await radioButtonPage.clickImpressiveBtn();
    expect(await radioButtonPage.getSelectedAnswer()).to.eq(
      "You have selected Impressive"
    );
  });
});
