import { firestore } from "database/admin";
import { NextApiRequest, NextApiResponse } from "next";

import GetUserById from "core/backend/GetUserById";

const userGetById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const findUser = new GetUserById(firestore);
  const userData = await findUser.__invoke(String(id));
  if (!userData) {
    res.status(404).json({ error: "User not found" });
  }

  res.status(200).json({ user: userData });
};

export default userGetById;
