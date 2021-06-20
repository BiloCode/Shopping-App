import { firestore } from "database/admin";
import { NextApiRequest, NextApiResponse } from "next";

import GetProductList from "core/backend/GetProductList";

const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  const getProductList = new GetProductList(firestore);
  const products = await getProductList.__invoke();

  res.status(200).json({ products });
};

export default getProducts;
