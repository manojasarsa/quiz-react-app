import { AuthActionType, AuthStateType } from "../types";

export const authReducer = (state: AuthStateType, action: AuthActionType) => {

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