import firebase from "firebase";

import { productConverter } from "database/models/Product";

class GetProductList {
  public async __invoke() {
    let list = [];

    const doc = await firebase
      .firestore()
      .collection("products")
      .withConverter(productConverter)
      .orderBy("createdAt", "desc")
      .get();

    doc.forEach((doc) => {
      const document = doc.data();
      list.push({
        _id: document._id,
        name: document.name,
        price: document.price,
        images: document.images,
        createdAt: document.createdAt.toDate().toDateString(),
      });
    });

    return list;
  }
}

export default GetProductList;
