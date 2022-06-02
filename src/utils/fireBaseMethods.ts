import { doc, getDoc, setDoc, getDocs, DocumentData, collection, updateDoc, addDoc } from "firebase/firestore";
import { User } from "firebase/auth";

import { categoriesRef, db, quizzesRef } from "../firebase.config";
import { async } from "@firebase/util";

const getCategories = async () => {
    try {
        const response = await getDocs(categoriesRef);
        const categories: DocumentData = response.docs.map((el) => {
            return { ...el.data(), id: el.id };
        });
        return categories;
    } catch (err) {
        console.error(err);
        throw Error("Unable to fetch Categories!");
    }
};

const getQuizzes = async () => {
    try {
        const response = await getDocs(quizzesRef);
        const quizzes: DocumentData = response.docs.map((el) => {
            return { ...el.data(), id: el.id };
        });

        return quizzes;
    } catch (err) {
        console.error(err);
        throw Error("Unable to fetch Categories!");
    }
};

export { getCategories, getQuizzes };