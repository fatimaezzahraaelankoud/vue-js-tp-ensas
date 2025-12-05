
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TA_CLE",
  authDomain: "TA_CLE",
  projectId: "TA_CLE",
  storageBucket: "TA_CLE",
  messagingSenderId: "TA_CLE",
  appId: "TA_CLE"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export function onUserStateChanged(callback) {
  return onAuthStateChanged(auth, callback);
}
