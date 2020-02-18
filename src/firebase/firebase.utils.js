import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAvQcrxfDA-A-H52BGnoN7CugI6oWkD9O4",
  authDomain: "crown-db-b0502.firebaseapp.com",
  databaseURL: "https://crown-db-b0502.firebaseio.com",
  projectId: "crown-db-b0502",
  storageBucket: "crown-db-b0502.appspot.com",
  messagingSenderId: "743223651189",
  appId: "1:743223651189:web:42a3c9b55565e4797d813c",
  measurementId: "G-HCPJV8BBT6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
