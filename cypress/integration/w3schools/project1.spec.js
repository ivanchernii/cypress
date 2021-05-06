import {
  checkH2Block,
  textFirstAccordion,
} from "/home/dev/Project1/cypress/support/w3schools/project1.js";

describe("Check in", function () {
  beforeEach(() => {
    cy.visit("https://www.w3schools.com/howto/default_page1.asp");
  });
  it("Check h2 block name", function () {
    cy.get(".howtocontainer > div > :nth-of-type(1) > h2").should(
      "have.text",
      "Slideshow"
    );
  });

  it("Check count photo", function () {
    checkH2Block("Slideshow");

    // check count picture
    cy.get(".numbertext:eq(0)").should("have.text", "1 / 4");
    cy.get(".slfade").find("img").should("have.attr", "src");

    // second picture count
    cy.get(".slnext").click();
    cy.get(".numbertext:eq(1)").should("have.text", "2 / 4");

    cy.get(".slfade").find("img").should("have.attr", "src");
    // check picture count when go back
    cy.get(".slprev").click();
    cy.get(".numbertext:eq(0)").should("have.text", "1 / 4");
    cy.get(".slfade").find("img").should("have.attr", "src");
  });

  it("Check Login Form", function () {
    checkH2Block("Login Form");
    // going to login form
    cy.get("button.w3-blue").should("contain", "Login").click();

    cy.get(".w3-animate-zoom").should("be.visible");
    // fill in name and password
    cy.get("input[placeholder='Enter Username']")
      .type("Ivan")
      .should("have.value", "Ivan");
    cy.get("input[placeholder='Enter Password']")
      .type("Automation228")
      .should("have.value", "Automation228");
    // checking checkbox
    cy.get("input[type='checkbox']")
      .should("be.checked")
      .uncheck()
      .should("not.be.checked");
    // finish login
    cy.get("button.w3-section.w3-button")
      .should("not.be.disabled")
      .should("have.text", "Login")
      .click();
    cy.get("#loginModal").should("not.be.visible");
  });

  it("Check Accordion", function () {
    checkH2Block("Accordion");
    // check title text
    cy.get(".w3-container .h2-anchor:eq(2)").should("have.text", "Accordion");
    //check text in 1-st section
    cy.get(".showpanel > p").should("contain.text", textFirstAccordion);
    // check quantity of accordions
    cy.get(".howtocontainer > div > div:nth-of-type(3) > .w3-container")
      .find(".accordion")
      .should("have.length", 3);
    // check class of opened accordion
    cy.get("#myfirstAcc").should("have.class", "accordion activeacc");
    // closed accordion and check its class
    cy.get("#myfirstAcc").click().should("have.class", "accordion");
  });
});
