import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { auth } from "../../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { AuthActionType, AuthContextType, AuthStateType, ReactChildrenType } from "../types";

const initialAuthState = {
      error: false,
      loading: false,
      userInfo: {
            email: "",
            token: ""
      }
};  

const AuthContext = createContext({} as AuthContextType);

const authReducer = (state: AuthStateType, action: AuthActionType) => {

      switch(action.type) {

            case "INITIALIZE": 
                  return { ...state, error: false, loading: true };

            case "SIGN_IN":
                  return { ...state, 
                        error: false,
                        loading: false,
                        userInfo: {
                              email: action.payload.email,
                              token: action.payload.token
                        }
                  };

            case "SIGN_OUT":
                  return { ...state, 
                        error: false,
                        loading: false,
                        userInfo: {
                              email: "",
                              token: ""
                        }
                  };

            case "SET_ERROR":
                  return { ...state, error: true, loading: false };
            
            default: 
                  return state;
      };
};

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

      return (
            <AuthContext.Provider value={{ authState, authDispatch }}>
                  {children}
            </AuthContext.Provider>
      );
}

export const useAuth = () => useContext(AuthContext);