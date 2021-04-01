import firebase from "firebase";

export type ProductCommentType = {
  fullName: string;
  description: string;
  createdAt: firebase.firestore.Timestamp;
};

export class Product {
  readonly _id: string;
  readonly name: string;
  readonly price: number;
  readonly stock: number;
  readonly images: string[];
  readonly description: string;
  readonly createdAt: firebase.firestore.Timestamp;
  readonly comments: ProductCommentType[];

  constructor(
    _id,
    name,
    price,
    stock,
    images,
    description,
    createdAt,
    comments
  ) {
    this._id = _id;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.description = description;
    this.createdAt = createdAt;
    this.comments = comments;
  }
}

export const productConverter: firebase.firestore.FirestoreDataConverter<Product> = {
  toFirestore: function (product: Product) {
    return {
      name: product.name,
      price: product.price,
      stock: product.stock,
      images: product.images,
      description: product.description,
      createdAt: product.createdAt,
      comments: product.comments,
    };
  },
  fromFirestore: function (
    snapshot: firebase.firestore.DocumentSnapshot,
    options
  ) {
    const data: firebase.firestore.DocumentData = snapshot.data(options);

    return new Product(
      snapshot.id,
      data.name,
      data.price,
      data.stock,
      data.images,
      data.description,
      data.createdAt,
      data.comments
    );
  },
};
