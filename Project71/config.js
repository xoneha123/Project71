import firebase from "firebase";
require("@firebase/firestore");
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyC7l40LswPJ8s-C8slh6H-wvjdCmbVxEmY",
  authDomain: "project71-30e69.firebaseapp.com",
  projectId: "project71-30e69",
  storageBucket: "project71-30e69.appspot.com",
  messagingSenderId: "123062007243",
  appId: "1:123062007243:web:ca52f5dbe21cc0af7f724e"
};
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
