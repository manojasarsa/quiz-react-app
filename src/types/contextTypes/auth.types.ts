// type for STATE properties of reducer

type AuthStateType = {
    error: boolean
    loading: boolean
    userInfo: {
        email: string
        token: string
    }
};

// types for ACTION properties reducer

type SignInActionType = {
    type: "SIGN_IN"
    payload: {
        email: any
        token: string
    }
};

type OtherActionType = {
    type: "INITIALIZE" | "SET_ERROR" | "SIGN_OUT"
};


type AuthActionType = SignInActionType | OtherActionType

// state and dispatch types of useReducer()

type AuthContextType = {
    authState: AuthStateType
    authDispatch: React.Dispatch<AuthActionType>
};

export type { AuthStateType, AuthContextType, AuthActionType };