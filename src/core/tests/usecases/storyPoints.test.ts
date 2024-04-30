import { describe, expect, it } from 'vitest';

import { StoryPoints } from '@core/domain/usecases/StoryPoints';
import { FactorsValues } from '@core/types/StoryPoints';

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
});
