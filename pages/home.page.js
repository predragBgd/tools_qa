"use strict";

const { By } = require("selenium-webdriver");
const AllPages = require("./all.page");

module.exports = class HomePage extends AllPages {
  #driver;

  constructor(webdriver) {
    super(webdriver);
    this.#driver = webdriver;
  }

  goToHomePage() {
    return this.#driver.get("https://demoqa.com/");
  }
  getPageTitle() {
    return this.#driver.getTitle();
  }
  async getElementsBtn() {
    await this.#driver.actions().scroll(0, 0, 0, 300).perform();
    await this.#driver
      .findElement(By.xpath(`//*[@id="app"]/div/div/div[2]/div/div[1]`))
      .click();
  }
};
