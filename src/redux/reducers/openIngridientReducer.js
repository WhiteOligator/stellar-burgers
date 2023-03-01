import {
    OPEN_INGRIDIENT,
    DELETE_INGRIDIENT,
} from "../actionType/openIngridient"


const initialState = {
    ingridient: [],
    openIngridient: false,  
}

export const openIngridientReducer = (state = initialState, action) => {
    switch(action.type) {
        case OPEN_INGRIDIENT: 
            return {
                ...state,
                ingridient: action.payload,
                openIngridient: true,
            }
        case DELETE_INGRIDIENT: 
            return {
                ingridient: [],
                openIngridient: false,
            }    
        default: {
            return {
                ...state
            }
        }    
    }
}