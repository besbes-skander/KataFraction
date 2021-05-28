import {Fraction} from './fraction';

describe('Fraction', () => {
  it('should create an instance', () => {
    expect(new Fraction(1, 1)).toBeTruthy();
  });

  it('should not accept 0 as numerator', () => {
    expect(() => new Fraction(0, 1)).toThrow(Error('invalid numerator'));
  });

  it('should not accept 0 as denominator', () => {
    expect(() => new Fraction(1, 0)).toThrow(Error('invalid denominator'));
  });

  it('Add function should return a Fraction', () => {
    const fraction1 = new Fraction(1,1);
    const fraction2 = new Fraction(1,1);
    const addedFraction  = Fraction.add(fraction1, fraction2);

    expect(addedFraction instanceof Fraction).toBeTruthy();
  });


});
