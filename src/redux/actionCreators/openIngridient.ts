import {
    OPEN_INGRIDIENT,
    DELETE_INGRIDIENT,
    OPEN_MODAL
} from "../actionType/openIngridient"
import {TIngredientItem} from '../../utils/TypesAndIntareface'

interface openIngridientAction {
    readonly type: typeof OPEN_INGRIDIENT;
    readonly payload: TIngredientItem[]
}

interface deleteIngridientAction {
    readonly type: typeof DELETE_INGRIDIENT;
}

interface openModalAction {
    readonly type: typeof OPEN_MODAL;   
}

export type TOpenIngredientAction = 
    | openIngridientAction
    | deleteIngridientAction
    | openModalAction;

export const openIngridient = (ingridient: TIngredientItem[]): openIngridientAction => ({
    type: OPEN_INGRIDIENT,
    payload: ingridient,
})

export const deleteIngridient = () : deleteIngridientAction => ({
    type: DELETE_INGRIDIENT,
})

export const openModal = () : openModalAction => ({
    type: OPEN_MODAL,
})
