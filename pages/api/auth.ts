import { firestore } from "database/admin";
import { NextApiRequest, NextApiResponse } from "next";

import GetUserById from "core/backend/GetUserById";
import tokenExists from "core/middlewares/tokenExists";

const authController = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId } = req.body;

  if (!userId) {
    res.status(404).json({ error: "User id undefined" });
    return;
  }

  const findUser = new GetUserById(firestore);
  const user = await findUser.__invoke(userId);

  if (!user) {
    res.status(404).json({ error: "User not available" });
    return;
  }

  res.status(200).json({
    user: {
      _id: userId,
      profileImage: user.profileImage,
    },
  });
};

export default tokenExists(authController);
