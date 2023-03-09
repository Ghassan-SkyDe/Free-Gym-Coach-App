import { createContext, useReducer } from "react";
// use this data before deploy to avoid reching RAPID API limlitation befor deploy(remove before deploy and use fetching data from rapid api again)
import { bodyPartsDataTest, exercisesDataTest } from "../data";


const INITIAL_STATE = {
    allExercises : {
     exercises: exercisesDataTest,
    //  exercises: [],
     loading: false,
     error: null
    },
    bodyParts: {
     parts: bodyPartsDataTest,
    //  parts:[],
     loading: false,
     error: null
    },
    selectedBodyPart: "all",
    resultTitle: "all",
    resultExercises: exercisesDataTest,
    // resultExercises: []
}

export const ExerciseContext = createContext(INITIAL_STATE);

const ExerciseReducer = (state,action) => {
    switch (action.type) {
        case "GET_EXERCISES_START":
            return {
                ...state,
                allExercises:{ ...state.allExercises, loading: true }
            }

        case "GET_EXERCISES_SUCCESS":
            return {
                ...state,
                allExercises:{ exercises: action.payload, loading: false, error: null }
            }
            
        case "GET_EXERCISES_FAILURE":
            return {
                ...state,
                allExercises:{ ...state.allExercises, loading: false, error: action.payload }
            }

        case "GET_BODY_PARTS_START":
            return {
                ...state,
                bodyParts:{ ...state.bodyParts, loading: true }
            }

        case "GET_BODY_PARTS_SUCCESS":
            return {
                ...state,
                bodyParts:{ parts: action.payload, loading: false, error: null }
            }
            
        case "GET_BODY_PARTS_FAILURE":
            return {
                ...state,
                bodyParts:{ ...state.bodyParts, loading: false, error: action.payload }
            }
    
        case "SET_SELECTED_BODY_PART":
            return {
                ...state,
                selectedBodyPart: action.payload
            }
    
        case "SET_RESULT_TITLE":
            return {
                ...state,
                resultTitle: action.payload
            }

        case "SET_RESULT_EXERCISES":
            return {
                ...state,
                resultExercises: action.payload
            }
    
        case "RESET_ALL_STATES":
            return INITIAL_STATE
    
        default: return state;
    }
}

export const ExerciseContextProvider = ({ children }) => {
    const [state, dispatch ] = useReducer(ExerciseReducer, INITIAL_STATE);

    return(
        <ExerciseContext.Provider value={{
            allExercises: state.allExercises.exercises,
            allExercisesLoading: state.allExercises.loading,
            allExercisesError: state.allExercises.error,
            bodyParts: state.bodyParts.parts,
            bodyPartsLoading: state.bodyParts.loading,
            bodyPartsError: state.bodyParts.error,
            selectedBodyPart: state.selectedBodyPart,
            resultTitle: state.resultTitle,
            resultExercises: state.resultExercises,
            dispatch
        }} >
            {children}
        </ExerciseContext.Provider>
    )
}
