import { NextApiRequest, NextApiResponse } from "next";

const tokenExists = (handler) => (req: NextApiRequest, res: NextApiResponse) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(404).json({ error: "Forbidden" });
    return;
  }

  const token = authorization.split(" ")[1];
  if(!token) {
    res.status(404).json({ error: "Token invalid" });
    return;
  }

  return handler(req, res);
};

export default tokenExists;
