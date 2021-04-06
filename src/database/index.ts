import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyApr2uOoYRjg5MF_NkYXKi6FGAOBy0H4eE",
  authDomain: "product-shop-49fa3.firebaseapp.com",
  projectId: "product-shop-49fa3",
  storageBucket: "product-shop-49fa3.appspot.com",
  messagingSenderId: "981931532893",
  appId: "1:981931532893:web:cb895af047379afe57a3b4",
  measurementId: "G-PE6SQC488T",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
