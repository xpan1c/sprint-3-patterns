import Article from "../models/Article";
import { CurrencyConversion } from "../models/BaseCurrency";
import CurrencyDecorator from "./CurrencyDecorator";

export class ArticleDecorator extends CurrencyDecorator {
  private articles: Article[];

  constructor(currencyConversion: CurrencyConversion, articles: Article[]) {
    super(currencyConversion);
    this.articles = articles;
  }
  totalCost() {
    const total = this.articles.reduce((sum, article) => {
      const articleCost = this.convert(article.price, article.currency);
      console.log(
        `Cost of ${article.name} in EUR with discount: ${articleCost}`
      );
      return sum + articleCost;
    }, 0);

    console.log(`Total cost of all articles in EUR with discount: ${total}`);
  }
}
