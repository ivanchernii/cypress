describe("Check in", function () {
  beforeEach(() => {
    cy.visit("https://www.w3schools.com/howto/default_page1.asp");
  });
  it("Check h2 block name", function () {
    //#testtest > div > div > div:nth-child(1) > h2  - попробуй изменить селектор на более короткий
    cy.get("#testtest > div > div > div:nth-child(1) > h2").should(
      "have.text",
      "Slideshow"
    );
  });

  it("Check count photo", function () {
    //navigate to slide show page
    //#testtest > div > div > div:nth-child(1) > h2 > a - попробуй изменить селектор на более короткий
    cy.get("#testtest > div > div > div:nth-child(1) > h2 > a").click();


    // #main > h2:nth-child(7) - попробуй изменить селектор на более короткий
    cy.get("#main > h2:nth-child(7)").should(
      "have.text",
      "Slideshow / Carousel"
    );


    //#main > div:nth-child(9) -  попробуй изменить селектор на более короткий
    cy.get("#main > div:nth-child(9)");
    // check count picture
    cy.get(".mySlides.fade > .numbertext:eq(0)").should("have.text", "1 / 4");


    // попробовать добавить такую проверку - https://stackoverflow.com/questions/50283857/using-cypress-how-would-i-write-a-simple-test-to-check-that-a-logo-image-exists
    cy.get("[src='img_nature_wide.jpg']");


    // second picture count
    // добавить атрибут .slnext - тк не понятно что єто за кнопка
    cy.get(".slnext").click();
    cy.get(".mySlides.fade > .numbertext:eq(1)").should("have.text", "2 / 4");



    // попробовать добавить такую проверку - https://stackoverflow.com/questions/50283857/using-cypress-how-would-i-write-a-simple-test-to-check-that-a-logo-image-exists
    cy.get("[src='img_lights_wide.jpg']");
    // check picture count when go back
    cy.get(".slprev").click();
    cy.get(".mySlides.fade > .numbertext:eq(0)").should("have.text", "1 / 4");
  });

  it("Check Login Form", function () {
    // going to login form
    cy.get("button.w3-blue").should("contain", "Login").click();

    // добавить 
    cy.get(".w3-animate-zoom").should("be.visible");
    // fill in name and password
    cy.get("[placeholder='Enter Username']")
      .type("Ivan")
      .should("have.value", "Ivan");
    cy.get("[placeholder='Enter Password']")
      .type("Automation228")
      .should("have.value", "Automation228");
    // checking checkbox
    cy.get("[type='checkbox']")
      .check()
      .should("be.checked")
      .uncheck()
      .should("not.be.checked");
    // finish login
    cy.get(".w3-section.w3-button").should("not.be.disabled").click();
    cy.get("#loginModal").should("not.be.visible");
  });

  it("Check Accordion", function () {
    // check title text
    cy.get(".howtocontainer div:nth-of-type(3) h2").should(
      "have.text",
      "Accordion"
    );
    //check text in 1-st section
    cy.get(".showpanel").should(
      "contain.text",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    );
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
