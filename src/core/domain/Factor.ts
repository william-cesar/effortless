import { FACTORS_INFO } from '@core/constants/factorsInfo';
import { FactorInfo, FactorsList } from '@core/types/Factor';
import { StepEvent } from '@core/types/Step';

export class Factors {
  private readonly MIN_STEP = 1;
  private readonly MAX_STEP = Object.keys(FACTORS_INFO).length;

  private currentStep: number = 1;
  private factorsInfo: FactorsList;

  constructor() {
    this.factorsInfo = FACTORS_INFO;
    this.resetFactors();
  }

  public get factorInfo(): FactorInfo {
    return {
      ...this.factorsInfo[this.currentStep],
      hasPrev: this.currentStep > this.MIN_STEP,
      hasNext: this.currentStep < this.MAX_STEP
    };
  }

  public get factors(): FactorsList {
    return this.factorsInfo;
  }

  public resetFactors(): void {
    for (let i = this.MIN_STEP; i <= this.MAX_STEP; i++) {
      this.factorsInfo[i] = {
        ...this.factorsInfo[i],
        currentValue: 50
      };
    }

    this.currentStep = 1;
  }

  public handleStepChange(event: StepEvent): void {
    if (event === 'next') {
      this.currentStep = ++this.currentStep;
      return;
    }

    this.currentStep = --this.currentStep;
  }

  public updateFactorInfoValue(value: number): void {
    this.factorsInfo[this.currentStep] = {
      ...this.factorsInfo[this.currentStep],
      currentValue: value
    };
  }
}
