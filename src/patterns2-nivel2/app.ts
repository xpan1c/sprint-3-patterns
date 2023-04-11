import Article from "./models/Article";
import { BaseCurrency } from "./models/BaseCurrency";
import { CurrencyToEuros } from "./decorators/CurrencyToEuros";
import { Discount } from "./decorators/Discount";

const baseCurrency = new BaseCurrency();
const eurosConverter = new CurrencyToEuros(baseCurrency);
const discountEurosConverter = new Discount(eurosConverter, 10);

const articles: Article[] = [
  new Article("Article 1", 100, "USD"),
  new Article("Article 2", 100, "GBP"),
  new Article("Article 3", 150, "USD"),
  new Article("Article 4", 120, "GBP"),
];

const totalCost = articles.reduce((sum, article) => {
  const articleCost = discountEurosConverter.convert(
    article.price,
    article.currency
  );
  console.log(`Cost of ${article.name} in EUR with discount: ${articleCost}`);
  return sum + articleCost;
}, 0);

console.log(`Total cost of all articles in EUR with discount: ${totalCost}`);
