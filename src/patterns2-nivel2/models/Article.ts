import { ShortCurrency } from "./BaseCurrency";

export default class Article {
  constructor(
    public name: string,
    public price: number,
    public currency: ShortCurrency
  ) {}
}
