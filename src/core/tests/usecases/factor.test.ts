import { Factors } from '@/core/usecases/Factor';
import { describe, expect, it } from 'vitest';

const makeSut = () => {
  const sut = new Factors();
  return { sut };
};

describe('Factor', () => {
  it('should be an instance', () => {
    const { sut } = makeSut();

    expect(sut).toBeInstanceOf(Factors);
  });
});
