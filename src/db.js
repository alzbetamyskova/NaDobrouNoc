import firebase from 'firebase/app';
import 'firabase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbn2Lr28yUo_nVCDdKx4N4hC73Df72e6c",
  authDomain: "nadobrounoc-e4493.firebaseapp.com",
  projectId: "nadobrounoc-e4493",
  storageBucket: "nadobrounoc-e4493.appspot.com",
  messagingSenderId: "427973488171",
  appId: "1:427973488171:web:1e9bb02c78b002c6d1446e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();