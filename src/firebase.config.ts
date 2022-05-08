import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const app = initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

const firebaseConfig = {
    apiKey: "AIzaSyBw84TVafcXAGPFepSQReWX7Bx2wM2b_qA",
    authDomain: "quiz-react-app-34841.firebaseapp.com",
    projectId: "quiz-react-app-34841",
    storageBucket: "quiz-react-app-34841.appspot.com",
    messagingSenderId: "45829296750",
    appId: "1:45829296750:web:4216ba59453240e0718c7f"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);