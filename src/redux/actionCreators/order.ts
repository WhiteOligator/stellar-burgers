import {
    CREATE_ORDER_SUCCESS,
    UPDATE_ORDER,
    CREATE_ORDER_STARTED,
    CREATE_ORDER_FAILED,
    CLEARE_ORDER
} from "../actionType/order"
import {TIngredientItem} from '../../utils/TypesAndIntareface'

interface createOrderSuccessAction {
    readonly type: typeof CREATE_ORDER_SUCCESS;
    readonly ingridients: TIngredientItem[];
    readonly cost: number;
    readonly orderNumber: number
}

interface createOrderStartedAction {
    readonly type: typeof CREATE_ORDER_STARTED;
}

interface createOrderFailedAction {
    readonly type: typeof CREATE_ORDER_FAILED;
    readonly payload: string;
}

interface updateOrderAction {
    readonly type: typeof UPDATE_ORDER;
    readonly payload: TIngredientItem[];
}

interface cleareOrderAction {
    readonly type: typeof CLEARE_ORDER;
}

export type TOrderAction = 
    | createOrderSuccessAction
    | createOrderStartedAction
    | createOrderFailedAction
    | updateOrderAction
    | cleareOrderAction;

export const createOrderSuccess = (
            ingridients: TIngredientItem[], 
            cost: number, 
            orderNumber: number
        ) : createOrderSuccessAction => 
        
({
    type: CREATE_ORDER_SUCCESS,
    ingridients: ingridients,
    cost: cost,
    orderNumber: orderNumber,
})

export const createOrderStarted = (): createOrderStartedAction => ({
    type: CREATE_ORDER_STARTED,
})

export const createOrderFailed = (error: string): createOrderFailedAction => ({
    type: CREATE_ORDER_FAILED,
    payload: error
})

export const updateOrder = (ingridients: TIngredientItem[]): updateOrderAction => ({
    type: UPDATE_ORDER,
    payload: ingridients,
})

export const cleareOrder = () : cleareOrderAction => ({
    type: CLEARE_ORDER,
   
})