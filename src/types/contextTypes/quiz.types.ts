// type for STATE properties of reducer

type QuizStateType = {
      error: boolean
      loading: boolean
      categories: string[]
      quizzes: string[]
}

// types for ACTION properties reducer



// state and dispatch types of useReducer()

type QuizContextType = {
      authState: QuizStateType
      authDispatch: React.Dispatch<QuizActionType>
};


export type { QuizContextType, QuizStateType, QuizActionType };