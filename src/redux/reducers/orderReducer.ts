import { TIngredientItem } from "../../utils/TypesAndIntareface"
import { TOrderAction } from "../actionCreators/order"
import {
    CLEARE_ORDER,
    CREATE_ORDER_FAILED,
    CREATE_ORDER_STARTED,
    CREATE_ORDER_SUCCESS,
    UPDATE_ORDER,
} from "../actionType/order"


type orderState = {
    ingridients: TIngredientItem[],
    costOfTheOrder: number,
    orderNumber: number,
    isPost: boolean,
    error: boolean,
    openOrder: boolean,
}

const initialState: orderState = {
    ingridients: [],
    costOfTheOrder: 0,
    orderNumber: 0,
    isPost: false,
    error: false,
    openOrder: false,
}
 
export const orderReducer = (state = initialState, action: TOrderAction): orderState => {
    switch(action.type) {
        case CREATE_ORDER_SUCCESS: 
            return {
                ...state,
                ingridients: action.ingridients,
                costOfTheOrder: action.cost,
                orderNumber: action.orderNumber,
                isPost: false,
                openOrder: true,
            }
        case CREATE_ORDER_STARTED: 
            return {
                ...state,
                isPost: true,
                openOrder: true,
            }
        case CREATE_ORDER_FAILED: 
            return {
                ...state,
                error: true,
                isPost: false,
            }       
        case CLEARE_ORDER: 
            return {
                ...state,
                ...initialState,
            }     
        default: return state
            
           
    }
}