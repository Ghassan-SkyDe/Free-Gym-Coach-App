import { createContext, useReducer } from "react"


const INITIAL_STATE = { selectedBodyPart:"all" };

export const SelectedBodyPartContext = createContext(INITIAL_STATE);

const SelectedBodyPartReducer = (state,action) => {
    switch (action.type) {
        case "SET_SELECTED_BODY_PART":
            return { selectedBodyPart: action.payload }
        default: return state;
    }
}

export const SelectedBodyPartContextProvider = ({ children }) => {
    const [state, dispatch ] = useReducer(SelectedBodyPartReducer, INITIAL_STATE);

    return(
        <SelectedBodyPartContext.Provider value={{
            selectedBodyPart: state.selectedBodyPart,
            dispatchSelectedBodyPart: dispatch
        }} >
            {children}
        </SelectedBodyPartContext.Provider>
    )
}