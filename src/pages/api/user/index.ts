import { firestore } from "database/admin";
import { NextApiRequest, NextApiResponse } from "next";

import ExistsUser from "core/backend/ExistsUser";
import tokenExists from "core/middlewares/tokenExists";
import CreateNewUser from "core/backend/CreateNewUser";

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { userId, email, fullName, profileImage, authType } = req.body;

    const existsUser = new ExistsUser(firestore);
    const createNewUser = new CreateNewUser(firestore);

    const isUserExists = await existsUser.__invoke(userId);

    if (isUserExists instanceof Error) {
      res.status(200).json({ error: "Server Error" });
      return;
    }

    if (isUserExists) {
      res.status(200).json({ message: "User registered" });
      return;
    }

    const isCreated = await createNewUser.__invoke({
      id: userId,
      type: authType,
      data: {
        email,
        fullName,
        profileImage,
      },
    });

    res.status(200).json({ isCreated });
    return;
  }

  res.status(200).json({ error: "Not method Post" });
};

export default tokenExists(createUser);
