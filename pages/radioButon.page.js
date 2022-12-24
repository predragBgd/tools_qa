"use strict";

const { By } = require("selenium-webdriver");
const AllPages = require("./all.page");

module.exports = class RadioButtonPage extends AllPages {
  #driver;

  constructor(webdriver) {
    super(webdriver);
    this.#driver = webdriver;
  }
  async clickImpressiveBtn() {
    await this.#driver
      .findElement(
        By.xpath(`//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[3]`)
      )
      .click();
  }
  getSelectedAnswer() {
    return this.#driver.findElement(By.css("p")).getText();
  }
};
