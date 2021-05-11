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