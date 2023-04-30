import { TIngredientItem } from "../../utils/TypesAndIntareface"
import { TOpenIngredientAction } from "../actionCreators/OpenIngridient/openIngridient"
import {
    OPEN_INGRIDIENT,
    DELETE_INGRIDIENT,
    OPEN_MODAL,
} from "../actionType/openIngridient"

type openIngridientState = {
    ingridient: TIngredientItem | null,
    openIngridient: boolean,
}


const initialState: openIngridientState = {
    ingridient: null,
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
                ingridient: null,
                openIngridient: false,
            } 
        case OPEN_MODAL: 
            return {
                ingridient: null,
                openIngridient: true,
            }    
        default: return state
    }
}