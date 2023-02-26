import {
    ADD_INGRIDIENT_CONSTRUCTOR,
    DELETE_INGRIDIENT_CONSTRUCTOR,
    MOVE_INGRIDIENT_CONSTRUCTOR,
    ADD_BUN_CONSTRUCTOR,
    GET_COST,
    CLEAR_CONSTRUCTOR,
} from "../actionType/constructorBurger"

const initialState = {
    ingridients: [],
    costOfTheOrder: 0,
    whatKindOfBun: [],
}

export const constructorBurgerReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_INGRIDIENT_CONSTRUCTOR: 
            return {
                ...state,
                ingridients: [...state.ingridients, action.payload],
            }
        case DELETE_INGRIDIENT_CONSTRUCTOR: 
            return {
                ...state,
                ingridients: state.ingridients.filter(el => el.dragId !== action.payload),
            }
        case MOVE_INGRIDIENT_CONSTRUCTOR: 
            return {
                ...state,
                ingridients: action.payload,
            }
        case ADD_BUN_CONSTRUCTOR: 
            return {
                ...state,
                whatKindOfBun: [action.payload, action.payload]
            }         
        case GET_COST: 
            return {
                ...state,
                costOfTheOrder: action.payload
            } 
        case CLEAR_CONSTRUCTOR:
            return {
                ...state,
                ingridients: [],
                costOfTheOrder: 0,
                whatKindOfBun: [],
            }     
        default: {
            return {
                ...state
            }
        }    
    }
}