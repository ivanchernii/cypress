import {
  checkAndClickButton,
  checkClassOfOpenedDropdown,
  checkValueOfItemsInDropdown,
  clickButtonAgain,
  checkClassOfClosedDropdown,
} from "../../support/w3schools/checkClickDropdowns.js";

describe("Check in", function () {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Click Dropdowns", function () {
    cy.checkH2Block("Click Dropdowns");
    checkAndClickButton();
    checkClassOfOpenedDropdown();
    checkValueOfItemsInDropdown();
    clickButtonAgain();
    checkClassOfClosedDropdown();
  });
});
