import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { auth } from "../firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { AuthContextType, ReactChildrenType, ServicesType } from "../types";
import { authReducer } from "../reducers/authReducer";
import { signInService, signOutService, signUpService } from "../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const initialAuthState = {
      error: false,
      loading: false,
      userInfo: {
            email: "",
            token: ""
      }
};  

const navigate = useNavigate();

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

      const signUpHandler = async ( { email, password, firstName, lastName } : { email: string; password: string; firstName: string; lastName: string }) => {
            authDispatch({type: "INITIALIZE"});
            try {
                  const response = await signUpService({email, password});
                  const user = response.user;
                  if(user) {
                        navigate("/");
                        toast.success("Account Created!");
                        await createUser(user, { firstName, lastName });
                  }
            }
            catch(err: any) {
                  authDispatch({type: "SET_ERROR"});
                  toast.error(err.message);
            }
      }
      
      const signInHandler = async ( {email, password} :ServicesType, from: { pathname: string }) => {
            authDispatch({type: "INITIALIZE"});
            try {
                  const response = await signInService({email, password});
                  const user = response.user;
                  if(user) {
                        navigate(from);
                        toast.success("Login successfully!")
                  }
            }
            catch(err: any) {
                  authDispatch({type: "SET_ERROR"});
                  toast.error(err.message);
            }
      }
      
      const signOutHandler = () => {
            try {
                  signOutService();
                  navigate("/");
                  toast.success("Signed out!");
            }
            catch(err: any) {
                  authDispatch({type: "SET_ERROR"});
                  toast.error(err.message);
            }
      }

      return (
            <AuthContext.Provider value={{ authState, authDispatch }}>
                  {children}
            </AuthContext.Provider>
      );
}

export const useAuth = () => useContext(AuthContext);