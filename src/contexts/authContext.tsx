import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContextType, ReactChildrenType, ServicesType } from "../types";
import { authReducer } from "../reducers/authReducer";
import { signInService, signOutService, signUpService } from "../services/authService";

const initialAuthState = {
      error: false,
      loading: false,
      userInfo: {
            email: "",
            token: ""
      }
};  

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({children}: ReactChildrenType) => {

      const [ authState, authDispatch ] = useReducer(authReducer, initialAuthState);

      useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                  if(user) {
                        authDispatch({type: "SIGN_IN", payload: { email: user.email, token: user.uid}})
                  } else {
                        authDispatch({type: "SIGN_OUT"});
                  }
            })
      }, [authDispatch])

      const signUpHandler = async ( { email, password} :ServicesType) => {
            authDispatch({type: "INITIALIZE"});
            try {
                  const response = await signUpService({email, password});
                  console.log(response)
            }
            catch(error: any) {
                  authDispatch({type: "SET_ERROR"});
            }
      }
      
      const signInHandler = async ( {email, password} :ServicesType) => {
            authDispatch({type: "INITIALIZE"});
            try {
                  const response = await signInService({email, password});
                  console.log(response)
            }
            catch(error: any) {
                  authDispatch({type: "SET_ERROR"});
            }
      }
      
      const signOutHandler = () => {
            authDispatch({type: "SIGN_OUT"});
            signOutService();
      }

      return (
            <AuthContext.Provider value={{ authState, authDispatch }}>
                  {children}
            </AuthContext.Provider>
      );
}

export const useAuth = () => useContext(AuthContext);