/*
Middleware

    Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON.
    Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).
    Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands inicials 
    en cadascuna de les operacions. Invoca les execucions de la suma, la resta i la multiplicació, de manera que 
    es vagin mostrant per la consola les modificacions que es van fent als valors abans del resultat final.

*/
const fs = require('fs')


class Calc {
  constructor() {
    this.args = []
  }
  getJson(path) {
    const json = fs.readFileSync(path) 
    this.args = Object.values(JSON.parse(json));
    if (!this.args.every((number) => typeof number === "number")) {
      throw new Error("No es un numero");
    }
  }
  add() {
    return this.args.reduce((acc, cv) => acc + cv, 0);
  }
  subtract() {
    return this.args.reduce((acc, cv) => acc - cv);
  }
  multiply() {
    return this.args.reduce((acc, cv) => acc * cv, 1);
  }
  divide() {
    return this.args.reduce((acc, cv) => acc / cv);
  }
}

class Middleware {
    constructor() {
        this.middlewares = [];
    }

    addMiddleware(middleware) {
        this.middlewares.push(middleware);
    }

    applyMiddlewares(args) {
        return this.middlewares.reduce((acc, middleware) => {
            return middleware(acc);
        }, args);
    }
}
    
const m = new Middleware();

const square = (args)=> args.map(a => a * a);
const cube = (args) => args.map(a => Math.pow(a ,3));

m.addMiddleware(square)
m.addMiddleware(cube)

const j = './values.json'
const c = new Calc();


c.getJson(j);
console.log(c.args);
console.log(c.subtract());