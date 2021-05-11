import {
  firstPhotoCheck,
  photoAttributesCheck,
  clickArrowButtonNext,
  secondPhotoCheck,
  clickArrowButtonPrev,
} from "/home/dev/Project1/cypress/support/w3schools/slideshow";

describe("Check in", function () {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Check count photo", function () {
    cy.checkH2Block("Slideshow");
    firstPhotoCheck();
    photoAttributesCheck();
    clickArrowButtonNext();
    secondPhotoCheck();
    photoAttributesCheck();
    clickArrowButtonPrev();
    firstPhotoCheck();
    photoAttributesCheck();
  });
});
