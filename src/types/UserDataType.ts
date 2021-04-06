import firebase from "firebase";

export type UserImageProfileData = {
  url: string;
  name: string;
};

export type UserSimpleData = {
  _id: string;
  profileImage: UserImageProfileData;
};

export type UserDataType = UserSimpleData & {
  email: string;
  fullName: string;
  createdAt: firebase.firestore.Timestamp;
};
