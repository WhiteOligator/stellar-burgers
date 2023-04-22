import {
    OPEN_ORDER,
    OPEN_ORDER_NE_MODAL,
    DELETE_ORDER,
} from "../actionType/openOrder"
import {ElementOrders, TIngredientItem} from '../../utils/TypesAndIntareface'

interface openOrderAction {
    readonly type: typeof OPEN_ORDER;
    readonly payload: ElementOrders
}

interface deleteOrderAction {
    readonly type: typeof DELETE_ORDER;
}

interface openOrderModalAction {
    readonly type: typeof OPEN_ORDER_NE_MODAL;   
    readonly payload: boolean
}

export type TOpenOrderAction = 
    | openOrderAction
    | deleteOrderAction
    | openOrderModalAction;

export const openOrder = (order: ElementOrders): openOrderAction => ({
    type: OPEN_ORDER,
    payload: order,
})

export const deleteOrder = () : deleteOrderAction => ({
    type: DELETE_ORDER,
})

export const openOrderModal = (bol: boolean) : openOrderModalAction => ({
    type: OPEN_ORDER_NE_MODAL,
    payload: bol,
})
