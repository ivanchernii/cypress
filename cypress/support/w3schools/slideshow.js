export function firstPhotoCheck() {
  const firstPhoto = ".numbertext:eq(0)";

  cy.get(firstPhoto).should("have.text", "1 / 4");
}
export function photoAttributesCheck() {
  const photoAttributes = ".slfade";

  cy.get(photoAttributes).find("img").should("have.attr", "src");
}

export function clickArrowButtonNext() {
  const ArrowButtonNext = ".slnext";

  cy.get(ArrowButtonNext).click();
}
export function secondPhotoCheck() {
  const secondPhoto = ".numbertext:eq(1)";

  cy.get(secondPhoto).should("have.text", "2 / 4");
}

export function clickArrowButtonPrev() {
  const arrowButtonPrev = ".slprev";

  cy.get(arrowButtonPrev).click();
}
