export class Fraction {
  private numerator: number;
  private denominator: number;

  constructor(numerator: number, denominator: number) {
    if(numerator === 0) {
      throw Error('invalid numerator');
    }
    this.numerator = numerator;
    this.denominator = denominator;
  }
}
