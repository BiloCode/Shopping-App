import firebase from "firebase";

class GetProductList {
  public async __invoke() {
    let list = [];

    const doc = await firebase
      .firestore()
      .collection("products")
      .orderBy("createdAt", "desc")
      .limit(8)
      .get();

    doc.forEach((doc: firebase.firestore.QueryDocumentSnapshot) => {
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
