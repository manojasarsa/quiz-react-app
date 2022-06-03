import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { auth, db } from "../firebase.config";
import { signUpService, signInService, signOutService } from "../services/authService";
import { ServicesType } from "../types";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/authContext";

const useAuth = () => {

    const { authState, authDispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                authDispatch({ type: "SIGN_IN", payload: { email: user.email, token: user.uid } })
            } else {
                authDispatch({ type: "SIGN_OUT" });
            }
        })
    }, [authDispatch]);

    const signUpHandler = async ({ email, password, firstName, lastName }: { email: string; password: string; firstName: string; lastName: string }) => {
        authDispatch({ type: "INITIALIZE" });
        try {
            const response = await signUpService({ email, password });
            const user = response?.user;
            if (user) {
                navigate("/");
                toast.success("Account Created!");
                await createUser(user, { firstName, lastName });
            }
        }
        catch (err: any) {
            console.log(err);
            authDispatch({ type: "SET_ERROR" });
            toast.error(err.message);
        }
    }

    const signInHandler = async ({ email, password }: ServicesType, from: { pathname: string }) => {
        authDispatch({ type: "INITIALIZE" });
        try {
            const response = await signInService({ email, password });
            const user = response?.user;
            if (user) {
                navigate(from);
                toast.success("Login successfully!")
            }
        }
        catch (err: any) {
            authDispatch({ type: "SET_ERROR" });
            toast.error(err.message);
        }
    }

    const signOutHandler = () => {
        try {
            signOutService();
            navigate("/");
            toast.success("Signed out!");
        }
        catch (err: any) {
            authDispatch({ type: "SET_ERROR" });
            toast.error(err.message);
        }
    }

    const createUser = async (user: User, userData: { firstName: string, lastName: string }) => {
        let currentUserRef = doc(db, `users/${user.uid}`);
        console.log(currentUserRef);
        try {
            const snapShot = await getDoc(currentUserRef);
            if (!snapShot.exists()) {
                const { firstName, lastName } = userData;
                await setDoc(currentUserRef, {
                    email: user.email, firstName, lastName
                });
            }
        }
        catch (err) {
            console.error(err);
        }
    }

    return { signInHandler, signUpHandler, signOutHandler, authState };
};

export { useAuth };




