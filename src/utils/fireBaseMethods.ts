import { doc, getDoc, getDocs, DocumentData, collection, updateDoc } from "firebase/firestore";
import { categoriesRef, db, quizzesRef } from "../firebase.config";

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

const getQuiz = async (quizId: string) => {
    try {
        const quizRef = collection(db, `quizzes/${quizId}/questions`);
        const res = await getDocs(quizRef);
        const quiz: DocumentData = res.docs.map((el) => {
            return { ...el.data(), id: el.id };
        });
        return quiz;
    } catch (err) {
        console.log(err);
        throw Error("Unable to fetch quiz questions");
    }
};

const updateScore = async (userId: string, currentScore: number) => {
    try {
        const userRef = doc(db, `users/${userId}`);
        const userDocs = await getDoc(userRef);
        if (userDocs.exists()) {
            const { finalScore } = userDocs.data();
            await updateDoc(userRef, {
                finalScore: finalScore + currentScore
            })
        } 
    } catch (err) {
        console.log(err);
    }
};

export { getCategories, getQuizzes, getQuiz, updateScore };