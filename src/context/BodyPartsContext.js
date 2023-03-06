import { createContext, useReducer } from "react"
// use this data before deploy to avoid reching RAPID API limlitation befor deploy(remove before deploy and use fetching data from rapid api again)
import { bodyPartsDataTest } from "../data";

const INITIAL_STATE = {
    bodyParts: bodyPartsDataTest,
    // bodyParts: [],
    loading: false,
    error: null
}

export const BodyPartsContext = createContext(INITIAL_STATE);

const BodyPartsReducer = (state,action) => {
    switch (action.type) {
        case "GET_BODY_PARTS_START":
            return {
                bodyParts:[],
                loading: true,
                error: null
            }

        case "GET_BODY_PARTS_SUCCESS":
            return {
                bodyParts: action.payload,
                loading: false,
                error: null
            }

        case "GET_BODY_PARTS_FAILURE":
            return {
                bodyParts:[],
                loading: false,
                error: action.payload
            }
    
        default: return state;
    }
}

export const BodyPartsContextProvider = ({ children }) => {
    const [state, dispatch ] = useReducer(BodyPartsReducer, INITIAL_STATE);

    return(
        <BodyPartsContext.Provider value={{
            bodyParts: state.bodyParts,
            loading: state.loading,
            error: state.error,
            dispatchBodyParts: dispatch
        }} >
            {children}
        </BodyPartsContext.Provider>
    )
}