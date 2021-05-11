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
  export const textFirstAccordion =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
