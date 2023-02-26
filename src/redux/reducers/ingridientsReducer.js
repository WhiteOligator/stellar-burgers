import { GET_INGRIDIENTS_FAILED, GET_INGRIDIENTS_STARTED, GET_INGRIDIENTS_SUCCESS } from "../actionType/getIngridients"


const initialState = {
    ingridients: [],
    isIngridientsLoading: true,
    error: false
}

export const ingridientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_INGRIDIENTS_STARTED: 
            return {
                ...state,
                isIngridientsLoading: true,
            }
        case GET_INGRIDIENTS_FAILED: 
            return {
                ...state,
                isIngridientsLoading: false,
                error: true,
            }
        case GET_INGRIDIENTS_SUCCESS: 
            return {
                ...state,
                isIngridientsLoading: false,
                ingridients: action.payload,
            }       
        default: {
            return {
                ...state
            }
        }    
    }
}