import {
  checkH2Block,
  firstPhotoCheck,
  photoAttributesCheck,
  clickArrowButtonNext,
  secondPhotoCheck,
  clickArrowButtonPrev,
  loginFormButton,
  checkModalWindow,
  enterName,
  enterPassword,
  checkboxCheckOut,
  pressLogInButton,
  modalWindowInvisible,
  checkTitleText,
  firstSection,
  quantityOfAccordions,
  classOfOpenedAccordion,
  closeAccordionCheckClass,
  h2BlockName,
  checkDropdownButton,
  checkContent,
  checkAndClickButton,
  checkClassOfOpenedDropdown,
  checkValueOfItemsInDropdown,
  clickButtonAgain,
  checkClassOfClosedDropdown,
  clickAndCheckButton,
  checkSideNavigationCanvasVisibility,
  checkSideNavigationCanvasItems,
  checkCloseButtonOfSideNavigationCanvas,
  checkVisibilityOfClosedSideNavigationCanvas,
} from "/home/dev/Project1/cypress/support/w3schools/project1.js";

describe("Check in", function () {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Check h2 block name", function () {
    h2BlockName();
  });

  it("Check count photo", function () {
    checkH2Block("Slideshow");
    firstPhotoCheck();
    photoAttributesCheck();
    clickArrowButtonNext();
    secondPhotoCheck();
    photoAttributesCheck();
    clickArrowButtonPrev();
    firstPhotoCheck();
    photoAttributesCheck();
  });

  it("Check Login Form", function () {
    checkH2Block("Login Form");
    loginFormButton();
    checkModalWindow();
    enterName();
    enterPassword();
    checkboxCheckOut();
    pressLogInButton();
    modalWindowInvisible();
  });
  it("Check Accordion", function () {
    checkH2Block("Accordion");
    checkTitleText();
    firstSection();
    quantityOfAccordions();
    classOfOpenedAccordion();
    closeAccordionCheckClass();
  });
  it("Hover Dropdownss", function () {
    checkH2Block("Hover Dropdowns");
    checkDropdownButton();
    checkContent();
  });
  it("Click Dropdowns", function () {
    checkH2Block("Click Dropdowns");
    checkAndClickButton();
    checkClassOfOpenedDropdown();
    checkValueOfItemsInDropdown();
    clickButtonAgain();
    checkClassOfClosedDropdown();
  });
  it("Side Navigation", function () {
    checkH2Block("Side Navigation");
    clickAndCheckButton();
    checkSideNavigationCanvasVisibility();
    checkSideNavigationCanvasItems();
    checkCloseButtonOfSideNavigationCanvas();
    checkVisibilityOfClosedSideNavigationCanvas();
  });
});
