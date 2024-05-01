export type SliderHelper = {
  steps: number;
  startingValue: number;
};

export type FieldsByDataTestid = {
  themeSelect: () => Cypress.Chainable;
  themeSelectSelected: () => Cypress.Chainable;
  optionLight: () => Cypress.Chainable;
  optionDark: () => Cypress.Chainable;
  optionSystem: () => Cypress.Chainable;
  root: () => Cypress.Chainable;

  nextStepBtn: () => Cypress.Chainable;
  prevStepBtn: () => Cypress.Chainable;
  factorCard: () => Cypress.Chainable;
  estimativeSlider: () => Cypress.Chainable;
  sliderTooltip: () => Cypress.Chainable;

  resultsBtn: () => Cypress.Chainable;
  storyPointsCard: () => Cypress.Chainable;
  storyPointsCardText: () => Cypress.Chainable;
  tryAgainBtn: () => Cypress.Chainable;
};
