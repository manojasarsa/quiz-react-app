import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { ServicesType } from "../types";

const signUpService = ({email, password}: ServicesType) => {
      return createUserWithEmailAndPassword(auth, email, password);
}

const signInService = ({email, password}: ServicesType) => {
      return signInWithEmailAndPassword(auth, email, password);
}

const signOutService = () => {
      return signOut(auth);
}

export { signUpService, signInService, signOutService };