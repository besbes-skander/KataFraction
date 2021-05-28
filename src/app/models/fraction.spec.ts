import {Fraction} from './fraction';

describe('Fraction', () => {
  it('should create an instance', () => {
    expect(new Fraction(1, 1)).toBeTruthy();
  });

  it('should not accept 0 as numerator', () => {
    expect(() => new Fraction(0, 1)).toThrow(Error('invalid numerator'));
  });
});
