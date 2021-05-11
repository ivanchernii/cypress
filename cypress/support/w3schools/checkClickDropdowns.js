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
  