import { TIngredientItem } from "../../utils/TypesAndIntareface"
import { TOpenIngredientAction } from "../actionCreators/openIngridient"
import {
    OPEN_INGRIDIENT,
    DELETE_INGRIDIENT,
    OPEN_MODAL,
} from "../actionType/openIngridient"

type openIngridientState = {
    ingridient: TIngredientItem[],
    openIngridient: boolean,
}


const initialState: openIngridientState = {
    ingridient: [],
    openIngridient: false,  
}

export const openIngridientReducer = (state = initialState, action: TOpenIngredientAction): openIngridientState => {
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
        case OPEN_MODAL: 
            return {
                ingridient: [],
                openIngridient: true,
            }    
        default: return state
    }
}