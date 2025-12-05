
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbLD0DX-vEb0gU9CY5xoqUKZHyZwUZ0qA",
  authDomain: "AIzaSyDbLD0DX-vEb0gU9CY5xoqUKZHyZwUZ0qA",
  projectId: "ensa-vote-fatizahraaelankoud",
  storageBucket: "ensa-vote-fatizahraaelankoud.firebasestorage.app",
  messagingSenderId: "347887010504",
  appId: "1:347887010504:web:b6299f5d8ee091f9bb9bfd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export function onUserStateChanged(callback) {
  return onAuthStateChanged(auth, callback);
}
