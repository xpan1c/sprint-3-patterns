export interface Operation {
    execute(): number;
  }
  
  class Sum implements Operation {
    constructor(private params: { a: number; b: number }) {}
  
    execute(): number {
      return this.params.a + this.params.b;
    }
  }
  
  class Subtract implements Operation {
    constructor(private params: { a: number; b: number }) {}
  
    execute(): number {
      return this.params.a - this.params.b;
    }
  }
  
  class Multiply implements Operation {
    constructor(private params: { a: number; b: number }) {}
  
    execute(): number {
      return this.params.a * this.params.b;
    }
  }
  
  export class Calculator {
    constructor(private params: { a: number; b: number }) {}
  
    sum(): number {
      return new Sum(this.params).execute();
    }
  
    subtract(): number {
      return new Subtract(this.params).execute();
    }
  
    multiply(): number {
      return new Multiply(this.params).execute();
    }
  }
  