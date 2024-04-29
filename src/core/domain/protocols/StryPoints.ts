import { FactorsValues, StoryPointsResult } from '@core/types/StoryPoints';

export interface IStoryPoints {
  readonly factorsValues: FactorsValues;

  getResults(): StoryPointsResult;
}
