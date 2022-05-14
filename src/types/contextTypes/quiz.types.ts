type QuizStateType = {
      error: boolean
      loading: boolean
      categories: string[]
      quizzes: string[]
}

type QuizContextType = {
      authState: AuthStateType
      authDispatch: React.Dispatch<AuthActionType>
};

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

export type { QuizContextType, GameContextType, QuizStateType, GameStateType };