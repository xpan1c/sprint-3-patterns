type Middleware<T> = (params: T, next: () => void) => void;

export class MiddlewareStack<T> {
  private middlers: Middleware<T>[] = [];

  use(middleware: Middleware<T>): void {
    this.middlers.push(middleware);
  }

  execute(params: T): T {
    const clonedParams = { ...params };

    const executeMiddleware = (index: number): void => {
      if (index < this.middlers.length) {
        const middleware = this.middlers[index];
        middleware(clonedParams, () => executeMiddleware(index + 1));
      }
    };

    executeMiddleware(0);

    return clonedParams;
  }
}
