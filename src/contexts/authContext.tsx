import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";

import {
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      onAuthStateChanged,
      signOut,
} from "firebase/auth";

// TYPES

type AuthUser = {
      email: string
      password: string
      // setCurrentUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps = {
      children: React.ReactNode
}

// type UserContextType = {
//       currentUser: AuthUser | null
//       signup: () => {}
//       signin: () => {}
//       signout: () => {}
//       // setCurrentUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
// }

//          -- Main Code --

// const AuthContext = createContext<UserContextType | null>({
//       currentUser: null,
//       signup: () => Promise,
//       signin: () => Promise,
//       signout: () => Promise,
// });

export const AuthProvider = ({children}: UserContextProviderProps) => {

      const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

      // useEffect(() => {
      //       const unsubscribe = onAuthStateChanged(auth, (user) => {
      //             setCurrentUser(user);
      //       })

      //       return () => {
      //             unsubscribe();
      //       }
      // }, []);

      const signup = (props: AuthUser) => {
            return createUserWithEmailAndPassword(auth, props.email, props.password);
      }
      const signin = (props: AuthUser) => {
            return signInWithEmailAndPassword(auth, props.email, props.password);
      }
      const signout = () => {
            return signOut(auth);
      }

      // const value = {
      //       currentUser
      //       // signup,
      //       // signin,
      //       // signout,
      // };

      return (
            // <AuthContext.Provider value={{currentUser, signout, signin, signup}}>
            //       {children}
            // </AuthContext.Provider>
            <div></div>
      );
}

// export const useAuth = () => useContext(AuthContext);