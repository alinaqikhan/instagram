import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDjAswg29EKXOKAYCoZgbcHD9e-qa5fAIU",
  authDomain: "instagram-9e8c9.firebaseapp.com",
  projectId: "instagram-9e8c9",
  storageBucket: "instagram-9e8c9.appspot.com",
  messagingSenderId: "595687875054",
  appId: "1:595687875054:web:2583b91bd1a49203efaeff",
  measurementId: "G-W0YVR87MTP",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


// ----- seed the database only once -----


// seedDatabase(firebase);

export { firebase, FieldValue };
