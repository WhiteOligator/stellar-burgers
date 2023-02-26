import {
    CREATE_ORDER_SUCCESS,
    UPDATE_ORDER,
    CREATE_ORDER_STARTED,
    CREATE_ORDER_FAILED,
    CLEARE_ORDER
} from "../actionType/order"

export const createOrderSuccess = (ingridients, cost) => ({
    type: CREATE_ORDER_SUCCESS,
    ingridients: ingridients,
    cost: cost,
})

export const createOrderStarted = () => ({
    type: CREATE_ORDER_STARTED,
})

export const createOrderFailed = (error) => ({
    type: CREATE_ORDER_FAILED,
    payload: error
})

export const updateOrder = (ingridients) => ({
    type: UPDATE_ORDER,
    payload: ingridients,
})

export const cleareOrder = () => ({
    type: CLEARE_ORDER,
   
})