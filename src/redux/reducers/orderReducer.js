import {
    
    CLEARE_ORDER,
    CREATE_ORDER_FAILED,
    CREATE_ORDER_STARTED,
    CREATE_ORDER_SUCCESS,
    UPDATE_ORDER,
} from "../actionType/order"

const initialState = {
    ingridients: [],
    costOfTheOrder: 0,
    orderNumber: 0,
    isPost: false,
    error: false,
    openOrder: false,
}
 
export const orderReducer = (state = initialState, action) => {
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
            }
        case CREATE_ORDER_FAILED: 
            return {
                ...state,
                error: true,
                isPost: false,
            }    

        case UPDATE_ORDER: 
            return {
                ...state,
                isIngridientsLoading: false,
            }     
        case CLEARE_ORDER: 
            return {
                ...state,
                ...initialState,
            }     
        default: {
            return {
                ...state
            }
        }    
    }
}