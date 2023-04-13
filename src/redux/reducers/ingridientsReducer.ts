import { TGetIngredientsAction } from './../actionCreators/getIngridients';
import { TIngredientItem } from "../../utils/TypesAndIntareface"
import { GET_INGRIDIENTS_FAILED, GET_INGRIDIENTS_STARTED, GET_INGRIDIENTS_SUCCESS } from "../actionType/getIngridients"


type ingridientsReducerState = {
    ingridients: TIngredientItem[],
    isIngridientsLoading: boolean,
    error: boolean,
}

const initialState: ingridientsReducerState = {
    ingridients: [],
    isIngridientsLoading: true,
    error: false
}

export const ingridientsReducer = (state = initialState, action: TGetIngredientsAction): ingridientsReducerState => {
    switch(action.type) {
        case GET_INGRIDIENTS_STARTED: 
            return {
                ...state,
                isIngridientsLoading: true,
            }
        case GET_INGRIDIENTS_FAILED: 
            return {
                ...state,
                ingridients: [],
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