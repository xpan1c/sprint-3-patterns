import Article from "./Article";

type ShortCurrency = "USD" | "GBP" | "CHF" | "JPY" | "CAD" | "CNY";

interface CurrencyConversion {
  convert(amount: number, currency?: ShortCurrency, article?: Article): number;
}
class BaseCurrency implements CurrencyConversion {
  convert(amount: number): number {
    return amount;
  }
}

export { ShortCurrency, CurrencyConversion, BaseCurrency };