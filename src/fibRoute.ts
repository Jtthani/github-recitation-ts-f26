// Endpoint for querying the fibonacci numbers

import { Request, Response } from "express";

// fib.ts exports via `module.exports`, so TypeScript does not treat it as a
// module and an `import` of it fails with TS2306. Keep require() and give the
// value its real type here.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fibonacci = require("./fib") as (n: number) => number;

export default (req: Request, res: Response): void => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
