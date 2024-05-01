import { getFieldsByDataTest, slidersHelper } from 'cypress/support/helpers';

const BASE_URL = Cypress.env('BASE_URL');

describe('Home', () => {
  describe('Theme selection', () => {
    it('should switch theme to light', () => {
      cy.visit(BASE_URL);

      const { themeSelect, themeSelectSelected, optionLight, root } =
        getFieldsByDataTest();

      themeSelect().click();
      optionLight().click();

      themeSelectSelected().should('contain', 'Light');
      root().should('have.class', 'light');
    });

    it('should switch theme to dark', () => {
      cy.visit(BASE_URL);

      const { themeSelect, themeSelectSelected, optionDark, root } =
        getFieldsByDataTest();

      themeSelect().click();
      optionDark().click();

      themeSelectSelected().should('contain', 'Dark');
      root().should('have.class', 'dark');
    });

    it('should switch theme to system', () => {
      cy.visit(BASE_URL);

      const { themeSelect, themeSelectSelected, optionSystem, root } =
        getFieldsByDataTest();

      themeSelect().click();
      optionSystem().click();

      themeSelectSelected().should('contain', 'System');
      root().should('have.class', 'dark');
    });
  });

  describe('Cards', () => {
    it('should display Complexity card first', () => {
      cy.visit(BASE_URL);

      const { nextStepBtn, prevStepBtn, factorCard, resultsBtn } =
        getFieldsByDataTest();

      factorCard().should('exist').and('contain', 'Complexity');
      nextStepBtn().should('exist');
      prevStepBtn().should('not.exist');
      resultsBtn().should('have.class', 'hidden');
    });

    it('should display Uncertainty card second', () => {
      cy.visit(BASE_URL);

      const { nextStepBtn, prevStepBtn, factorCard, resultsBtn } =
        getFieldsByDataTest();

      nextStepBtn().click();

      factorCard().should('exist').and('contain', 'Uncertainty');
      nextStepBtn().should('exist');
      prevStepBtn().should('exist');
      resultsBtn().should('have.class', 'hidden');
    });

    it('should display Effort card last', () => {
      cy.visit(BASE_URL);

      const { nextStepBtn, prevStepBtn, factorCard, resultsBtn } =
        getFieldsByDataTest();

      nextStepBtn().click();
      nextStepBtn().click();

      factorCard().should('exist').and('contain', 'Effort');
      nextStepBtn().should('not.exist');
      prevStepBtn().should('exist');
      resultsBtn().should('not.have.class', 'hidden');
    });

    it('should slide complexity points to 80', () => {
      const targetValue = 80;

      cy.visit(BASE_URL);

      const { startingValue, steps } = slidersHelper(targetValue);
      const { estimativeSlider, sliderTooltip, factorCard } =
        getFieldsByDataTest();

      factorCard().should('contain', 'Complexity');

      sliderTooltip()
        .should('have.attr', 'aria-valuenow', startingValue)
        .and('contain.text', startingValue);

      estimativeSlider().click().type('{rightarrow}'.repeat(steps));

      sliderTooltip()
        .should('have.attr', 'aria-valuenow', targetValue)
        .and('contain.text', targetValue);
    });

    it('should slide uncertainty points to 0', () => {
      const targetValue = 0;

      cy.visit(BASE_URL);

      const { startingValue, steps } = slidersHelper(targetValue);
      const { estimativeSlider, sliderTooltip, factorCard, nextStepBtn } =
        getFieldsByDataTest();

      nextStepBtn().click();

      factorCard().should('contain', 'Uncertainty');
      sliderTooltip()
        .should('have.attr', 'aria-valuenow', startingValue)
        .and('contain.text', startingValue);

      estimativeSlider().click().type('{leftarrow}'.repeat(steps));

      sliderTooltip()
        .should('have.attr', 'aria-valuenow', targetValue)
        .and('contain.text', targetValue);
    });

    it('should slide effort points to 100', () => {
      const targetValue = 100;

      cy.visit(BASE_URL);

      const { startingValue, steps } = slidersHelper(targetValue);
      const { estimativeSlider, sliderTooltip, factorCard, nextStepBtn } =
        getFieldsByDataTest();

      nextStepBtn().click();
      nextStepBtn().click();

      factorCard().should('contain', 'Effort');
      sliderTooltip()
        .should('have.attr', 'aria-valuenow', startingValue)
        .and('contain.text', startingValue);

      estimativeSlider().click().type('{rightarrow}'.repeat(steps));

      sliderTooltip()
        .should('have.attr', 'aria-valuenow', targetValue)
        .and('contain.text', targetValue);
    });
  });

  describe('Results', () => {
    it('should display results card', () => {
      cy.visit(BASE_URL);

      const {
        nextStepBtn,
        resultsBtn,
        storyPointsCard,
        storyPointsCardText,
        tryAgainBtn
      } = getFieldsByDataTest();

      nextStepBtn().click();
      nextStepBtn().click();
      resultsBtn().click();

      storyPointsCard().should('exist');
      storyPointsCardText().should('exist').and('contain', '5');
      tryAgainBtn().should('exist');
    });

    it('should try again', () => {
      cy.visit(BASE_URL);

      const {
        factorCard,
        nextStepBtn,
        resultsBtn,
        storyPointsCard,
        storyPointsCardText,
        tryAgainBtn
      } = getFieldsByDataTest();

      nextStepBtn().click();
      nextStepBtn().click();
      resultsBtn().click();

      storyPointsCard().should('exist');
      storyPointsCardText().should('exist').and('contain', '5');
      tryAgainBtn().should('exist');
      factorCard().should('not.exist');

      tryAgainBtn().click();

      factorCard().should('exist');
      storyPointsCard().should('not.exist');
      resultsBtn().should('have.class', 'hidden');
    });
  });
});
