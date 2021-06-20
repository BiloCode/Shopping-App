import { firestore } from "database/admin";
import { NextApiRequest, NextApiResponse } from "next";

import GetPageInformation from "core/backend/GetPageInformation";

const getPageInfo = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (!id) {
    res.status(200).json({ error: "Id undefined" });
    return;
  }

  const getPageInfo = new GetPageInformation(firestore);
  const pageData = await getPageInfo.__invoke(String(id));

  res.status(200).json({ page: pageData });
};

export default getPageInfo;
