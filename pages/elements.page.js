"use strict";

const { By } = require("selenium-webdriver");
const AllPages = require("./all.page");

module.exports = class ElementsPage extends AllPages {
  #driver;

  constructor(webdriver) {
    super(webdriver);
    this.#driver = webdriver;
  }
  async goToTextBoxPage() {
    await this.#driver.findElement(By.xpath(`//li[@id="item-0"]`)).click();
  }
  async goToRadioButtonPage() {
    await this.#driver.findElement(By.id("item-2")).click();
  }
};
