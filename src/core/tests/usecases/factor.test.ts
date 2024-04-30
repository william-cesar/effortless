import { describe, expect, it } from 'vitest';

import { Factors } from '@core/domain/usecases/Factor';

import {
  COMPLEXITY_FACTOR_FIXTURE,
  EFFORT_FACTOR_FIXTURE,
  FACTORS_INFO_FIXTURES,
  UNCERTAINTY_FACTOR_FIXTURE
} from '@core/tests/fixtures/factorsInfo';

const makeSut = () => {
  const sut = new Factors();
  return { sut };
};

describe('Factor', () => {
  it('should be an instance', () => {
    const { sut } = makeSut();

    expect(sut).toBeInstanceOf(Factors);
  });

  it('should get all factors', () => {
    const { sut } = makeSut();

    expect(sut.factors).toEqual(FACTORS_INFO_FIXTURES);
  });

  it('should update the step', () => {
    const { sut } = makeSut();

    expect(sut.currentStep).toBe(1);

    sut.handleStepChange('next');

    expect(sut.currentStep).toBe(2);

    sut.handleStepChange('prev');

    expect(sut.currentStep).toBe(1);
  });

  it('should get the complexity factor info', () => {
    const { sut } = makeSut();

    expect(sut.currentStep).toBe(1);
    expect(sut.factorInfo).toEqual({
      ...COMPLEXITY_FACTOR_FIXTURE,
      hasNext: true,
      hasPrev: false
    });
  });

  it('should get the uncertainty factor info', () => {
    const { sut } = makeSut();

    sut.handleStepChange('next');

    expect(sut.currentStep).toBe(2);
    expect(sut.factorInfo).toEqual({
      ...UNCERTAINTY_FACTOR_FIXTURE,
      hasNext: true,
      hasPrev: true
    });
  });

  it('should get the effort factor info', () => {
    const { sut } = makeSut();

    sut.handleStepChange('next');

    sut.handleStepChange('next');

    expect(sut.currentStep).toBe(3);
    expect(sut.factorInfo).toEqual({
      ...EFFORT_FACTOR_FIXTURE,
      hasNext: false,
      hasPrev: true
    });
  });

  it('should reset the state', () => {
    const { sut } = makeSut();

    sut.handleStepChange('next');

    expect(sut.currentStep).toBe(2);
    expect(sut.factorInfo).toEqual({
      ...UNCERTAINTY_FACTOR_FIXTURE,
      hasNext: true,
      hasPrev: true
    });

    sut.resetFactors();

    expect(sut.currentStep).toBe(1);
    expect(sut.factorInfo).toEqual({
      ...COMPLEXITY_FACTOR_FIXTURE,
      hasNext: true,
      hasPrev: false
    });
  });

  it('should update the factor current value', () => {
    const { sut } = makeSut();

    const newCurrentValue = 10;

    expect(sut.factorInfo).toEqual({
      ...COMPLEXITY_FACTOR_FIXTURE,
      currentValue: 50,
      hasNext: true,
      hasPrev: false
    });

    sut.updateFactorInfoValue(newCurrentValue);

    expect(sut.factorInfo).toEqual({
      ...COMPLEXITY_FACTOR_FIXTURE,
      currentValue: newCurrentValue,
      hasNext: true,
      hasPrev: false
    });
  });
});
