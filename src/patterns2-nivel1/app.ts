import { MiddlewareStack } from "./Middleware";
import { Calculator } from "./Calculator";
import * as fs from "fs";

const path = "params.json"
const operationParams = JSON.parse(fs.readFileSync(path, "utf8"));

const middlewareStack = new MiddlewareStack<typeof operationParams>();

middlewareStack.use((params, next) => {
  console.log("Antes del primer middleware:", params);
  params.a = params.a ** 2;
  params.b = params.b ** 2;
  console.log("Después del primer middleware:", params);
  next();
});

middlewareStack.use((params, next) => {
  console.log("Antes del segundo middleware:", params);
  params.a = params.a ** 3;
  params.b = params.b ** 3;
  console.log("Después del segundo middleware:", params);
  next();
});

middlewareStack.use((params, next) => {
  console.log("Antes del tercer middleware:", params);
  params.a = params.a / 2;
  params.b = params.b / 2;
  console.log("Después del tercer middleware:", params);
  next();
});

const transformedParams = middlewareStack.execute(operationParams);

const calculator = new Calculator(transformedParams);

console.log("Sum:", calculator.sum());
console.log("Subtract:", calculator.subtract());
console.log("Multiply:", calculator.multiply());
