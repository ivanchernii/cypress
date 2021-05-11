import {
    checkTitleText,
    firstSection,
    quantityOfAccordions,
    classOfOpenedAccordion,
    closeAccordionCheckClass,
    
} from '../../support/w3schools/checkAccordion.js'

describe("Check in", function () {
    beforeEach(() => {
      cy.visit("/");
    });
it("Check Accordion", function () {
    cy.checkH2Block("Accordion");
    checkTitleText();
    firstSection();
    quantityOfAccordions();
    classOfOpenedAccordion();
    closeAccordionCheckClass();
  });
});