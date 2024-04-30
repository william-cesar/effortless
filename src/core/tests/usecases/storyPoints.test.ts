import { describe, expect, it } from 'vitest';

import { StoryPoints } from '@core/domain/usecases/StoryPoints';
import { FactorsValues } from '@core/types/StoryPoints';

import { SCENARIOS } from '@core/tests/fixtures/storyPoints';

const makeSut = (
  { complexity, uncertainty, effort }: FactorsValues = {
    complexity: 0,
    uncertainty: 0,
    effort: 0
  }
) => {
  const sut = new StoryPoints({ complexity, uncertainty, effort });

  return { sut };
};

describe('StoryPoints', () => {
  it('should be an instance', () => {
    const { sut } = makeSut();

    expect(sut).toBeInstanceOf(StoryPoints);
  });

  it.each(SCENARIOS)(
    'should calculate story points for $label',
    ({ values, expected }) => {
      const { sut } = makeSut(values);

      const result = sut.getResults();

      expect(result).toEqual(expected);
    }
  );
});
