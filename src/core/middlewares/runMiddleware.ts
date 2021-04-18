import { NextApiRequest, NextApiResponse } from "next";

const runMiddleware = (middleware) => (req: NextApiRequest, res: NextApiResponse) =>
  new Promise((resolve, reject) => {
    middleware(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });

export default runMiddleware;
