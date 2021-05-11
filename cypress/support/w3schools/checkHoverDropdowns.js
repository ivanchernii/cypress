export function checkDropdownButton() {
    const checkDropDownButton = ".dropdown2 > .dropbtn";
    cy.get(checkDropDownButton).should("have.text", "Hover");
  }
  
  export function checkContent() {
    const contentCheck = ".dropdown2 > .dropdown-content > a";
    cy.get(contentCheck).should("have.length", 3);
  }