// /firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-Q4Vl_W-S1btHfzXq1ghav9Q7YEK4bI8",
  authDomain: "project-2666.firebaseapp.com",
  projectId: "project-2666",
  storageBucket: "project-2666.appspot.com",
  messagingSenderId: "22036053929",
  appId: "1:22036053929:web:5150c475bc98862cd50eb8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
