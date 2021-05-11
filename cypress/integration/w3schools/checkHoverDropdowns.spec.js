import {
  checkDropdownButton,
  checkContent,
} from "../../support/w3schools/checkHoverDropdowns.js";

describe("Check in", function () {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Hover Dropdowns", function () {
    cy.checkH2Block("Hover Dropdowns");
    checkDropdownButton();
    checkContent();
  });
});
