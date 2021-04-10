import { Firestore } from "types/FirebaseTypes";

class GetProductList {
  private firestore: Firestore;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  public async __invoke() {
    let list = [];

    const doc = await this.firestore
      .collection("products")
      .orderBy("createdAt", "desc")
      .limit(8)
      .get();

    doc.forEach((doc) => {
      const document = doc.data();
      if (document.state === "waiting") {
        return;
      }

      list.push({
        _id: doc.id,
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
