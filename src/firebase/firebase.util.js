import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCeiinkbxllpybbFhpyG5RE8Sr6lROBICI",
  authDomain: "tourist-guide-9d4d4.firebaseapp.com",
  projectId: "tourist-guide-9d4d4",
  storageBucket: "tourist-guide-9d4d4.appspot.com",
  messagingSenderId: "1076221690825",
  appId: "1:1076221690825:web:9e93f928a8af5f16011e18",
};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const firestore = app.firestore();
