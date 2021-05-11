import {
  loginFormButton,
  checkModalWindow,
  enterName,
  enterPassword,
  checkboxCheckOut,
  pressLogInButton,
  modalWindowInvisible,
} from "../../support/w3schools/checkLoginForm.js";

describe("Check in", function () {
    beforeEach(() => {
      cy.visit("/");
    });

it("Check Login Form", function () {
  cy.checkH2Block("Login Form");
  loginFormButton();
  checkModalWindow();
  enterName();
  enterPassword();
  checkboxCheckOut();
  pressLogInButton();
  modalWindowInvisible();
});
});
