"use strict";

const { By, until } = require("selenium-webdriver");
const AllPages = require("./all.page");

module.exports = class TextBoxPage extends AllPages {
  #driver;

  constructor(webdriver) {
    super(webdriver);
    this.#driver = webdriver;
  }
  async getUserData() {
    await this.#driver.findElement(By.id("userName")).sendKeys("Blagoje Mitić");
    await this.#driver
      .findElement(By.id("userEmail"))
      .sendKeys("blaza@kamkaza.lok");
    await this.#driver
      .findElement(By.id("currentAddress"))
      .sendKeys("Terazije bb");
    await this.#driver
      .findElement(By.id("permanentAddress"))
      .sendKeys("Terazije 12");
  }
  async getSubmitBtn() {
    await this.#driver.actions().scroll(0, 0, 0, 500).perform();
    await this.#driver.findElement(By.id("submit")).click();
  }
  getOutputName() {
    // return this.#driver.findElement(By.id("name")).getText();
    return this.#driver.findElement(By.id("output")).isDisplayed();
  }
  async goToCheckBoxPage() {
    await this.#driver.findElement(By.xpath(`//li[@id="item-1"]`)).click();
  }
};
