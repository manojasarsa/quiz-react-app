import { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContextType, ReactChildrenType } from "../types";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({children}: ReactChildrenType) => {

      const initialAuthState = {
            error: false,
            loading: false,
            userInfo: {
                  email: "",
                  token: ""
            }
      };  

      const [ authState, authDispatch ] = useReducer(authReducer, initialAuthState);

      return (
            <AuthContext.Provider value={{ authState, authDispatch }}>
                  {children}
            </AuthContext.Provider>
      );
}

// export const useAuth = () => useContext(AuthContext);