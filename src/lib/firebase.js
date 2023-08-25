// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDJuKhFKgq8iK7NZy0d9EVBsYz6ZeRiJ4I",
  authDomain: "amparo-beltran-portfolio.firebaseapp.com",
  projectId: "amparo-beltran-portfolio",
  storageBucket: "amparo-beltran-portfolio.appspot.com",
  messagingSenderId: "983308027277",
  appId: "1:983308027277:web:144ffeb2ea46ae7d4629c4",
  measurementId: "G-EQMGFZPXSR",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
