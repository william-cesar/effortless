import { FactorInfo, FactorsList } from '@core/types/Factor';

export const COMPLEXITY_FACTOR_FIXTURE: FactorInfo = {
  title: 'Complexity',
  subtitle: 'How big is the issue?',
  info: 'It refers to the level of difficulty and intricacy involved in a task or feature. It can be influenced by factors such as size, dependencies, and technical challenges.',
  lowerEndLabel: 'Extremely complex',
  upperEndLabel: 'Extremely simple',
  currentValue: 50
};

export const UNCERTAINTY_FACTOR_FIXTURE: FactorInfo = {
  title: 'Uncertainty',
  subtitle: 'How clear is the problem?',
  info: 'It relates to the lack of clarity or information about a task or feature. It can stem from changing requirements, limited knowledge, or external factors.',
  lowerEndLabel: 'Extremely unclear',
  upperEndLabel: 'Extremely clear',
  currentValue: 50
};

export const EFFORT_FACTOR_FIXTURE: FactorInfo = {
  title: 'Effort',
  subtitle: 'How hard is it to solve?',
  info: 'It represents the amount of work or resources required to complete a task or feature. It includes time, skills, and resources needed to deliver the desired outcome.',
  lowerEndLabel: 'Extremely difficult',
  upperEndLabel: 'Extremely easy',
  currentValue: 50
};

export const FACTORS_INFO_FIXTURES: FactorsList = {
  1: COMPLEXITY_FACTOR_FIXTURE,
  2: UNCERTAINTY_FACTOR_FIXTURE,
  3: EFFORT_FACTOR_FIXTURE
};
