// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import{ getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEubkqID0m9_oe9p_VkRVoptlvms8G0aE",
  authDomain: "house-market-484cc.firebaseapp.com",
  projectId: "house-market-484cc",
  storageBucket: "house-market-484cc.appspot.com",
  messagingSenderId: "735270565538",
  appId: "1:735270565538:web:fc439674e8419eb15989fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
