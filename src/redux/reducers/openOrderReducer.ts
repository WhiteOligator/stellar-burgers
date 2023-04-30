import { ElementOrders } from "../../utils/TypesAndIntareface"
import { TOpenOrderAction } from "../actionCreators/ActionOrder/ActionOrder"
import {
    OPEN_ORDER,
    OPEN_ORDER_NE_MODAL,
    DELETE_ORDER,
} from "../actionType/openOrder"

type openOrderState = {
    order: ElementOrders,
    openOrderBool: boolean,
    openOrderPage: boolean
}


const initialState: openOrderState = {
    order: {
        createdAt: '',
        ingredients: [],
        name: '',
        number: 0,
        status: '',
        updatedAt: '',
        _id: '',
    },
    openOrderBool: false,  
    openOrderPage: true,
}

export const openOrderReducer = (state = initialState, action: TOpenOrderAction): openOrderState => {
    switch(action.type) {
        case OPEN_ORDER: 
            return {
                ...state,
                order: action.payload,
                openOrderBool: true,
            }
        case DELETE_ORDER: 
            return {
                ...state,
                order: initialState.order,
                openOrderBool: false,
            } 
        case OPEN_ORDER_NE_MODAL: 
            return {
                ...state,
                order: initialState.order,
                openOrderBool: false,
                openOrderPage: action.payload,
            }    
        default: return state     
    }
}