import { CurrencyConversion, ShortCurrency } from "../models/BaseCurrency";
import CurrencyDecorator from "./CurrencyDecorator";

export class Discount extends CurrencyDecorator {
  private discountPercentage: number;

  constructor(
    currencyConversion: CurrencyConversion,
    discountPercentage: number
  ) {
    super(currencyConversion);
    this.discountPercentage = discountPercentage;
  }

  convert(amount: number, currency: ShortCurrency): number {
    const convertedAmount = super.convert(amount, currency);
    const discountedAmount =
      convertedAmount * (1 - this.discountPercentage / 100);
    return discountedAmount;
  }
}
