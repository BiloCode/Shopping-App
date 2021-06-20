import { firestore } from "database/admin";
import { NextApiRequest, NextApiResponse } from "next";

import tokenExists from "core/middlewares/tokenExists";
import UpdateUserProfileImage from "core/backend/UpdateUserProfileImage";

const updateProfileImage = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "PUT") {
    res.status(404).json({ error: "Not put method" });
    return;
  }

  const { userId, profileImage } = req.body;

  if (!profileImage || !userId) {
    res.status(404).json({ error: "Params not complete" });
    return;
  }

  const updateImage = new UpdateUserProfileImage(firestore);
  const isUpdated = await updateImage.__invoke(userId, profileImage);

  res.status(200).json({ isUpdated });
};

export default tokenExists(updateProfileImage);
