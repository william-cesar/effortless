import { FACTORS_INFO } from '@core/constants/factorsInfo';
import { IFactor } from '@core/domain/protocols/Factor';
import { FactorInfo, FactorsList } from '@core/types/Factor';
import { StepEvent } from '@core/types/Step';

export class Factors implements IFactor {
  private readonly MIN_STEP = 1;
  private readonly MAX_STEP = Object.keys(FACTORS_INFO).length;

  private _currentStep: number = 1;
  private factorsInfo: FactorsList;

  constructor() {
    this.factorsInfo = FACTORS_INFO;
    this.resetFactors();
  }

  public get factorInfo(): FactorInfo {
    return {
      ...this.factorsInfo[this._currentStep],
      hasPrev: this._currentStep > this.MIN_STEP,
      hasNext: this._currentStep < this.MAX_STEP
    };
  }

  public get factors(): FactorsList {
    return this.factorsInfo;
  }

  public get currentStep(): number {
    return this._currentStep;
  }

  public resetFactors(): void {
    for (let i = this.MIN_STEP; i <= this.MAX_STEP; i++) {
      this.factorsInfo[i] = {
        ...this.factorsInfo[i],
        currentValue: 50
      };
    }

    this._currentStep = 1;
  }

  public handleStepChange(event: StepEvent): void {
    if (event === 'next') {
      this._currentStep = ++this._currentStep;
      return;
    }

    this._currentStep = --this._currentStep;
  }

  public updateFactorInfoValue(value: number): void {
    this.factorsInfo[this._currentStep] = {
      ...this.factorsInfo[this._currentStep],
      currentValue: value
    };
  }
}
