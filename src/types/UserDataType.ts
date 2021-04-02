import firebase from "firebase";

export type UserSimpleData = {
  _id: string;
  profileImage: string;
};

export type UserDataType = UserSimpleData & {
  email: string;
  fullName: string;
  createdAt: firebase.firestore.Timestamp;
};
