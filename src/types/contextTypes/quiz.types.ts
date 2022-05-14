// type for STATE properties of reducer

type QuizStateType = {
      error: boolean
      loading: boolean
      categories: string[]
      quizzes: string[]
}

// types for ACTION properties reducer

type SetQuizType = {
      type: "SET_QUIZ" 
      payload: {
            categories: string[]
            quizzes: string[]
      }
};

type OtherActionType = {
      type: "INITIALIZE" | "SET_ERROR"
};

type QuizActionType = SetQuizType | OtherActionType

// state and dispatch types of useReducer()

type QuizContextType = {
      authState: QuizStateType
      authDispatch: React.Dispatch<QuizActionType>
};


export type { QuizContextType, QuizStateType, QuizActionType };