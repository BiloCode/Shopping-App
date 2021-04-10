import firebase from "firebase";

import { PageModel } from "types/PageModel";
import { Firestore } from "types/FirebaseTypes";

class GetPageInformation {
  private firestore: Firestore;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  public async __invoke(page_name: string): Promise<PageModel> {
    const doc = await this.firestore
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
