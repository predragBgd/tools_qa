"use strict";

const { By } = require("selenium-webdriver");

module.exports = class AllPages {
  #driver;
  constructor(webdriver) {
    this.#driver = webdriver;
  }
  getPageMainTitle() {
    return this.#driver.findElement(By.className("main-header")).getText();
  }
};
