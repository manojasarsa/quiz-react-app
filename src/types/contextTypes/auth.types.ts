type AuthStateType = {
      error: boolean
      loading: boolean
      userInfo: {
            email: string
            token: string
      }
};

type AuthContextType = {
      authState: AuthStateType
      authDispatch: React.Dispatch<AuthActionType>
};

type ServicesType = {
      email: string
      password: string
};

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

export type { AuthStateType, AuthContextType, ServicesType, AuthActionType }