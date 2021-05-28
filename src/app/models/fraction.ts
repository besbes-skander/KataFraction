export class Fraction {
  private readonly numerator: number;
  private readonly denominator: number;

  constructor(numerator: number, denominator: number) {
    if (numerator === 0) {
      throw Error('invalid numerator');
    }

    if (denominator === 0) {
      throw Error('invalid denominator');
    }

    const gcd = this.getGcd(numerator, denominator);

    this.numerator = numerator / gcd;
    this.denominator = denominator / gcd;
  }

  getNumerator(): number {
    return this.numerator;
  }

  getDenominator(): number {
    return this.denominator;
  }

  static add(fraction1: Fraction, fraction2: Fraction): Fraction {
    const numerator = (fraction1.numerator * fraction2.denominator) + (fraction2.numerator * fraction1.denominator)
    const denominator = fraction1.denominator * fraction2.denominator;

    return new Fraction(numerator, denominator);
  }

  getGcd(numerator: number, denominator: number): number {
    return denominator === 0 ? numerator : this.getGcd(denominator, numerator % denominator);
  }
}
