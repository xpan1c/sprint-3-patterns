import { CurrencyConversion, ShortCurrency } from "../models/BaseCurrency";

export default abstract class CurrencyDecorator implements CurrencyConversion {
  protected currencyConversion: CurrencyConversion;

  constructor(currencyConversion: CurrencyConversion) {
    this.currencyConversion = currencyConversion;
  }

  convert(amount: number, currency: ShortCurrency): number {
    return this.currencyConversion.convert(amount, currency);
  }
}
