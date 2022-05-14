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

type AuthStateType = {
      error: boolean
      loading: boolean
      userInfo: {
            email: string
            token: string
      }
};

type AuthActionType = SignInActionType | OtherActionType

type AuthContextType = {
      authState: AuthStateType
      authDispatch: React.Dispatch<AuthActionType>
};

export type { AuthStateType, AuthContextType, AuthActionType };