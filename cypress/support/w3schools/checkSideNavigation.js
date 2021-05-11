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