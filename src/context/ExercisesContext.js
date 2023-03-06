import { createContext, useReducer } from "react";
// use this data before deploy to avoid reching RAPID API limlitation befor deploy(remove before deploy and use fetching data from rapid api again)
import { exercisesDataTest } from "../data";


const INITIAL_STATE = {
    exercises: exercisesDataTest,
    // exercises: [],
    loading: false,
    error: null
}

export const ExercisesContext = createContext(INITIAL_STATE);

const ExercisesReducer = (state,action) => {
    switch (action.type) {
        case "GET_EXERCISES_START":
            return {
                exercises:[],
                loading: true,
                error: null
            }

        case "GET_EXERCISES_SUCCESS":
            console.log(JSON.stringify(action.payload));
            return {
                exercises: action.payload,
                loading: false,
                error: null
            }
            
        case "SET_EXERCISES":
            console.log(action.payload);
            return {
                exercises: action.payload,
                loading: false,
                error: null
            }

        case "GET_EXERCISES_FAILURE":
            return {
                exercises:[],
                loading: false,
                error: action.payload
            }
    
        default: return state;
    }
}

export const ExercisesContextProvider = ({ children }) => {
    const [state, dispatch ] = useReducer(ExercisesReducer, INITIAL_STATE);

    return(
        <ExercisesContext.Provider value={{
            exercises: state.exercises,
            loading: state.loading,
            error: state.error,
            dispatchExercises: dispatch
        }} >
            {children}
        </ExercisesContext.Provider>
    )
}