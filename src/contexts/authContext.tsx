import { createContext, useReducer } from "react";
import { AuthContextType, ReactChildrenType } from "../types";
import { authReducer } from "../reducers/authReducer";

const AuthContext = createContext({} as AuthContextType);

const AuthProvider = ({ children }: ReactChildrenType) => {

    const initialAuthState = {
        error: false,
        loading: false,
        userInfo: {
            email: "",
            token: ""
        }
    };

    const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

    return (
        <AuthContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthContext.Provider>
    )
};

export { AuthContext, AuthProvider };