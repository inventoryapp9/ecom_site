// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; //v9
import "firebase/compat/auth"; //v9
//import { ProviderId } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0cSd_Em17fLS8fZavUfcAnTKd3x3g6TQ",
  authDomain: "crown-store-react.firebaseapp.com",
  projectId: "crown-store-react",
  storageBucket: "crown-store-react.appspot.com",
  messagingSenderId: "524508238407",
  appId: "1:524508238407:web:1282d41066ead9fb031762",
  measurementId: "G-B7EKS0HHH4",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user ", error);
    }
  }
  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
