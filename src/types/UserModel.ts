import firebase from "firebase";

import { FirebaseImage } from "./FirebaseImage";
import { AuthenticationType } from "./AuthenticationType";

export interface IUserAuthContext {
  _id: string;
  profileImage: FirebaseImage;
}

export interface IUserModel extends IUserAuthContext {
  email: string;
  fullName: string;
  authenticationType: AuthenticationType;
  createdAt: firebase.firestore.Timestamp;
}
