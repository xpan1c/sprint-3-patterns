import { ShortCurrency } from "../models/BaseCurrency";
import CurrencyDecorator from "./CurrencyDecorator";
import currencyConversions from "../util/currency_conversions.json";

export class CurrencyToEuros extends CurrencyDecorator {
  private getConversionRate(currency: ShortCurrency): number {
    const conversionKey = `${currency}_EUR` as keyof typeof currencyConversions;
    const conversionRate = currencyConversions[conversionKey];
    return conversionRate;
  }

  convert(amount: number, currency: ShortCurrency): number {
    const conversionRate = this.getConversionRate(currency);
    const convertedAmount = this.currencyConversion.convert(
      amount * conversionRate
    );
    return convertedAmount;
  }
}
