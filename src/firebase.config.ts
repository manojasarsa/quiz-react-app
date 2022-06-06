import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const app = initializeApp({
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
    appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
});

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const categoriesRef = collection(db, "categories");
const quizzesRef = collection(db, "quizzes");

// DEMO PRACTICE

// console.log("quizzesREF -> ", quizzesRef);
// console.log("categoriesREF -> ", categoriesRef);

// const singleDocRef = doc(db, 'quizzes', 'Q4RSU6FCoVodIc5Euhq1');        // fetching REFERNCE of single doc

// // console.log("singleDOcRef -> ", singleDocRef);       

// const fun = async () => {
//     const quizDoc = await getDoc(singleDocRef);        // fetching a single doc
//     // console.log("QUIZDOC ->", quizDoc);             
//     // console.log("QUIZDOC data ->", quizDoc.data());   // to actually fetch data          
// }
// fun();

// const fun1 = async () => {
//     const allDocs = await getDocs(categoriesRef);
//     console.log("ALL DOCS --> ", allDocs);
//     // allDocs.forEach((doc) => console.log(doc.data())),
// }
// fun1();

// const questionsRef = collection(db, "quizzes/quizId/questions");

// // console.log("QUESTIONS ->", questionsRef);

// const fun2 = async () => {
//     const allDocsQues = await getDocs(questionsRef);
//     console.log("AllDocsQUsersRef-", allDocsQues);
//     // allDocsQues.forEach((doc) => console.log("BRO", doc ));
// }
// fun2();

export { app, db, auth, storage, categoriesRef, quizzesRef };