export class Fraction {
  private readonly numerator: number;
  private readonly denominator: number;

  constructor(numerator: number, denominator: number) {
    if(numerator === 0) {
      throw Error('invalid numerator');
    }

    if(denominator === 0) {
      throw Error('invalid denominator');
    }
    this.numerator = numerator;
    this.denominator = denominator;
  }

  getNumerator() {
    return this.numerator;
  }

  getDenominator() {
    return this.denominator;
  }

  static add(fraction1: Fraction, fraction2: Fraction): Fraction {
    return new Fraction(1,1);
  }
}
