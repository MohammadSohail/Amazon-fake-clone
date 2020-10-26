import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTJlVjkGsDBt6WTLR2QiIkxonbIdzkyzE",
  authDomain: "clone-3980c.firebaseapp.com",
  databaseURL: "https://clone-3980c.firebaseio.com",
  projectId: "clone-3980c",
  storageBucket: "clone-3980c.appspot.com",
  messagingSenderId: "844617389335",
  appId: "1:844617389335:web:981961e57f30a4a1631352",
  measurementId: "G-4RNZSE8LTX"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};