import firebase from "firebase";

import { FirebaseImage } from "./FirebaseImage";
import { ProductStateType } from "./ProductStateType";

export interface ProductModel {
  _id: string;
  price: number;
  stock: number;
  description: string;
  images: FirebaseImage[];
  state: ProductStateType;
  createdAt: firebase.firestore.Timestamp;
}
