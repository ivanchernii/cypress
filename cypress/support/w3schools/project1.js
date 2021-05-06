export function checkH2Block(nameH2) {
  return cy.get(".w3-container .h2-anchor").should("contain", nameH2);
}

export const textFirstAccordion =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
