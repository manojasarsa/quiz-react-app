type GameContextType = {
      authState: AuthStateType
      authDispatch: React.Dispatch<AuthActionType>
};

type GameStateType = {
      error: boolean
      loading: boolean
      questions: {}[]
      currentQuesIndex: number
      selectedOptions: []
      quizTitle: string
}

export type { GameContextType, GameStateType };