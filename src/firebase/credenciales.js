import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXTg6mNGooBHWL1Awvh_Q36NAf7BtY1jQ",
  authDomain: "proyectofacilito-4f329.firebaseapp.com",
  projectId: "proyectofacilito-4f329",
  storageBucket: "proyectofacilito-4f329.appspot.com",
  messagingSenderId: "960453744990",
  appId: "1:960453744990:web:fcf0d845341c02401557cf",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export default firebaseApp;
