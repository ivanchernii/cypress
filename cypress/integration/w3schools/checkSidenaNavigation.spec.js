import {
    clickAndCheckButton,
  checkSideNavigationCanvasVisibility,
  checkSideNavigationCanvasItems,
  checkCloseButtonOfSideNavigationCanvas,
  checkVisibilityOfClosedSideNavigationCanvas
} from '../../support/w3schools/checkSideNavigation.js'

describe("Check in", function () {
    beforeEach(() => {
      cy.visit("/");
    });
it("Side Navigation", function () {
    cy.checkH2Block("Side Navigation");
    clickAndCheckButton();
    checkSideNavigationCanvasVisibility();
    checkSideNavigationCanvasItems();
    checkCloseButtonOfSideNavigationCanvas();
    checkVisibilityOfClosedSideNavigationCanvas();
  });
});