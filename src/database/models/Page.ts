import firebase from "firebase";

export class Page {
  readonly banner_images: string[];

  constructor(images: string[]) {
    this.banner_images = images;
  }
}

export const pageConverter: firebase.firestore.FirestoreDataConverter<Page> = {
  toFirestore: function (page: Page) {
    return {
      banner_images: page.banner_images,
    };
  },
  fromFirestore: function (
    snapshot: firebase.firestore.DocumentSnapshot,
    options
  ) {
    const data = snapshot.data(options);

    return new Page(data.banner_images);
  },
};
