export function checkH2Block(nameH2) {
  return cy.get(".w3-container .h2-anchor").should("contain", nameH2);
}

export const textFirstAccordion =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export function firstPhotoCheck() {
  const firstPhoto = ".numbertext:eq(0)";

  cy.get(firstPhoto).should("have.text", "1 / 4");
}

export function photoAttributesCheck() {
  const photoAttributes = ".slfade";

  cy.get(photoAttributes).find("img").should("have.attr", "src");
}

export function clickArrowButtonNext() {
  const ArrowButtonNext = ".slnext";

  cy.get(ArrowButtonNext).click();
}

export function secondPhotoCheck() {
  const secondPhoto = ".numbertext:eq(1)";

  cy.get(secondPhoto).should("have.text", "2 / 4");
}

export function clickArrowButtonPrev() {
  const arrowButtonPrev = ".slprev";

  cy.get(arrowButtonPrev).click();
}

export function loginFormButton() {
  const clickOnLoginFormButton = "button.w3-blue";

  cy.get(clickOnLoginFormButton).should("contain", "Login").click();
}

export function checkModalWindow() {
  const modalWindowIsVisible = ".w3-animate-zoom";

  cy.get(modalWindowIsVisible).should("be.visible");
}

export function enterName() {
  const enterNameInput = "input[placeholder='Enter Username']";

  cy.get(enterNameInput).type("Ivan").should("have.value", "Ivan");
}

export function enterPassword() {
  const enterPasswordInput = "input[placeholder='Enter Password']";

  cy.get(enterPasswordInput)
    .type("Automation228")
    .should("have.value", "Automation228");
}

export function checkboxCheckOut() {
  const checkUncheckBox = "input[type='checkbox']";

  cy.get(checkUncheckBox)
    .should("be.checked")
    .uncheck()
    .should("not.be.checked");
}

export function pressLogInButton() {
  const pressingLogInButton = "button.w3-section.w3-button";

  cy.get(pressingLogInButton)
    .should("not.be.disabled")
    .should("have.text", "Login")
    .click();
}

export function modalWindowInvisible () {
  const modalWindowinvisible = "#loginModal";

  cy.get(modalWindowinvisible).should("not.be.visible");
}

export function checkTitleText() {
  const checkOutTitleText = ".w3-container .h2-anchor:eq(2)";

  cy.get(checkOutTitleText).should("have.text", "Accordion");
}

export function firstSection() {
  const checkFirstSection = ".showpanel > p";

  cy.get(checkFirstSection).should("contain.text", textFirstAccordion);
}

export function quantityOfAccordions() {
  const howMuchAccordions =
    ".howtocontainer > div > div:nth-of-type(3) > .w3-container";

  cy.get(howMuchAccordions).find(".accordion").should("have.length", 3);
}

export function classOfOpenedAccordion() {
  const accordionsClass = "#myfirstAcc";

  cy.get(accordionsClass).should("have.class", "accordion activeacc");
}

export function closeAccordionCheckClass() {
  const classOfClosedAccordion = "#myfirstAcc";

  cy.get(classOfClosedAccordion).click().should("have.class", "accordion");
}

export function h2BlockName() {
  const nameOfH2Block = ".howtocontainer > div > :nth-of-type(1) > h2";

  cy.get(nameOfH2Block).should("have.text", "Slideshow");
}

export function checkDropdownButton() {
  const checkDropDownButton = ".dropdown2 > .dropbtn";
  cy.get(checkDropDownButton).should("have.text", "Hover");
}

export function checkContent() {
  const contentCheck = ".dropdown2 > .dropdown-content > a";
  cy.get(contentCheck).should("have.length", 3);
}

export function checkAndClickButton() {
  const CheckClick = "[onclick='myFunction()']";
  cy.get(CheckClick).should("have.text", "Click").click();
}

export function checkClassOfOpenedDropdown() {
  const openedDropDownClass = "#myDropdown";
  cy.get(openedDropDownClass).should("have.class", "dropdown-content show");
}

export function checkValueOfItemsInDropdown() {
  const valueItemsInDropdown = "#myDropdown >a";
  cy.get(valueItemsInDropdown).should("have.length", 3);
}

export function clickButtonAgain() {
  const AgainButton = "[onclick='myFunction()']";
  cy.get(AgainButton).click();
}

export function checkClassOfClosedDropdown() {
  const classOfClosedDropdown = "#myDropdown";
  cy.get(classOfClosedDropdown).should("have.class", "dropdown-content");
}

export function clickAndCheckButton() {
  const buttonCheckClick = "[onclick='openOffcanvas1()']";
  cy.get(buttonCheckClick).should("have.text", "Sidenav overlay").click();
}

export function checkSideNavigationCanvasVisibility() {
  const canvasVisibility = "#myOffcanvas";
  cy.get(canvasVisibility).should("be.visible");
}

export function checkSideNavigationCanvasItems() {
  const canvasItems = "#myOffcanvas a";
  cy.get(canvasItems).should("have.length", 5);
}

export function checkCloseButtonOfSideNavigationCanvas() {
  const canvasCloseButton = ".closeOffcanvas";
  cy.get(canvasCloseButton).click();
}

export function checkVisibilityOfClosedSideNavigationCanvas () {
  const visibilityOfClosedCanvas = "#myOffcanvas";
  cy.get(visibilityOfClosedCanvas).should("not.be.visible");
}