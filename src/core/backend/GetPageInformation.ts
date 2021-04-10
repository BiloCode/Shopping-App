import firebase from "firebase";

import { PageModel } from "types/PageModel";

class GetPageInformation {
  public async __invoke(page_name: string): Promise<PageModel> {
    const doc = await firebase
      .firestore()
      .collection("page_content")
      .doc(page_name)
      .get();

    const data = doc.data();

    return {
      bannerImages: data.bannerImages,
    };
  }
}

export default GetPageInformation;
