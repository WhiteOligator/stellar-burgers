import {
    GET_INGRIDIENTS_FAILED,
    GET_INGRIDIENTS_STARTED,
    GET_INGRIDIENTS_SUCCESS,
} from '../actionType/getIngridients'
import {TIngredientItem} from '../../utils/TypesAndIntareface'

interface getIngridientsSuccessAction {
    readonly type: typeof GET_INGRIDIENTS_SUCCESS;
    readonly payload: TIngredientItem[]
}

interface getIngridientsFailedAction {
    readonly type: typeof GET_INGRIDIENTS_FAILED;
    readonly payload: string
}

interface getIngridientsStartedAction {
    readonly type: typeof GET_INGRIDIENTS_STARTED;
}

export type TGetIngredientsAction = 
    | getIngridientsSuccessAction
    | getIngridientsFailedAction
    | getIngridientsStartedAction;

export const getIngridientsSuccess = (ingridients: TIngredientItem[]): getIngridientsSuccessAction => ({
    type: GET_INGRIDIENTS_SUCCESS,
    payload: ingridients,
})

export const getIngridientsFailed = (error: string): getIngridientsFailedAction => ({
    type: GET_INGRIDIENTS_FAILED,
    payload: error,
})

export const getIngridientsStarted = (): getIngridientsStartedAction => ({
    type: GET_INGRIDIENTS_STARTED,
})