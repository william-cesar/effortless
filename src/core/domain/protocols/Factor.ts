import { FactorInfo, FactorsList } from '@core/types/Factor';
import { StepEvent } from '@core/types/Step';

export interface IFactor {
  get factorInfo(): FactorInfo;
  get factors(): FactorsList;
  get currentStep(): number;

  resetFactors(): void;
  handleStepChange(event: StepEvent): void;
  updateFactorInfoValue(value: number): void;
}
