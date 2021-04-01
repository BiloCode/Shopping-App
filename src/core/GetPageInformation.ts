import firebase from "firebase";

import { pageConverter } from "database/models/Page";

class GetPageInformation {
  public async __invoke(page_name: string) {
    const doc = await firebase
      .firestore()
      .collection("page_content")
      .withConverter(pageConverter)
      .doc(page_name)
      .get();

    const data = doc.data();

    return {
      banner_images: data.banner_images,
    };
  }
}

export default GetPageInformation;
