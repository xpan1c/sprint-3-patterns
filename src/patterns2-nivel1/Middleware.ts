type Middleware<T> = (params: T, next: () => void) => void;

export class MiddlewareStack<T> {
  private middlewares: Middleware<T>[] = [];

  use(middleware: Middleware<T>): void {
    this.middlewares.push(middleware);
  }

  execute(params: T): T {
    const clonedParams = { ...params };

    const executeMiddleware = (index: number): void => {
      if (index < this.middlewares.length) {
        const middleware = this.middlewares[index];
        middleware(clonedParams, () => executeMiddleware(index + 1));
      }
    };

    executeMiddleware(0);

    return clonedParams;
  }
}
