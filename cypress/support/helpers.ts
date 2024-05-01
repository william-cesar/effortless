import { FieldsByDataTestid, SliderHelper } from './types';

export const getFieldsByDataTest = (): FieldsByDataTestid => {
  return {
    themeSelect: () => cy.get('[data-testid="theme-select"]'),
    themeSelectSelected: () => cy.get('[data-testid="theme-select-selected"]'),
    optionLight: () => cy.get('[data-testid="theme-select-option-light"]'),
    optionDark: () => cy.get('[data-testid="theme-select-option-dark"]'),
    optionSystem: () => cy.get('[data-testid="theme-select-option-system"]'),
    root: () => cy.get(':root'),

    nextStepBtn: () => cy.get('[data-testid="action-bar-next-btn"]'),
    prevStepBtn: () => cy.get('[data-testid="action-bar-prev-btn"]'),
    factorCard: () => cy.get('[data-testid="factor-card"]'),
    estimativeSlider: () => cy.get('[data-testid="estimative-slider"]'),
    sliderTooltip: () => cy.get('[data-testid="estimative-slider-tooltip"]'),

    resultsBtn: () => cy.get('[data-testid="get-results-btn"]'),
    storyPointsCard: () => cy.get('[data-testid="story-points-card"]'),
    storyPointsCardText: () => cy.get('[data-testid="story-points-card-text"]'),
    tryAgainBtn: () => cy.get('[data-testid="story-points-card-try-again-btn"]')
  };
};

export const slidersHelper = (targetValue: number): SliderHelper => {
  const SLIDER_INCREMENT = 10;
  const STARTING_VALUE = 50;

  if (targetValue === STARTING_VALUE) {
    return {
      steps: 0,
      startingValue: STARTING_VALUE
    };
  }

  if (targetValue < STARTING_VALUE) {
    const steps = (STARTING_VALUE - targetValue) / SLIDER_INCREMENT;

    return {
      steps,
      startingValue: STARTING_VALUE
    };
  }

  const steps = (targetValue - STARTING_VALUE) / SLIDER_INCREMENT;

  return {
    steps,
    startingValue: STARTING_VALUE
  };
};
