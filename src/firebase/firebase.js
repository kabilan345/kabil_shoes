import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAc8DMNveCgEa2b59WW2HGqFwdFZNFljc",
  authDomain: "kabil-shoes.firebaseapp.com",
  projectId: "kabil-shoes",
  storageBucket: "kabil-shoes.firebasestorage.app",
  messagingSenderId: "922645571866",
  appId: "1:922645571866:web:d79b6ac4d033bfb141a4a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default db;