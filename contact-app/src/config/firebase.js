import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD7UNvFkHsBJpt_qvDneU6arolaCig-O_c",
  authDomain: "vite-contact-fb594.firebaseapp.com",
  projectId: "vite-contact-fb594",
  storageBucket: "vite-contact-fb594.appspot.com",
  messagingSenderId: "303347381261",
  appId: "1:303347381261:web:c8930333358d3dc8e9d144",
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);