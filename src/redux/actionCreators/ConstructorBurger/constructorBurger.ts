import {
    ADD_INGRIDIENT_CONSTRUCTOR,
    DELETE_INGRIDIENT_CONSTRUCTOR,
    MOVE_INGRIDIENT_CONSTRUCTOR,
    ADD_BUN_CONSTRUCTOR,
    GET_COST,
    CLEAR_CONSTRUCTOR,
} from '../../actionType/constructorBurger'
import { TIngredientItemDragId} from '../../../utils/TypesAndIntareface'

interface addIngridientsConstructorAction {
    readonly type: typeof ADD_INGRIDIENT_CONSTRUCTOR;
    readonly payload: TIngredientItemDragId
}

interface deleteIngridientsConstructorAction {
    readonly type: typeof DELETE_INGRIDIENT_CONSTRUCTOR;
    readonly payload: string;
}

interface moveIngridientsConstructorAction {
    readonly type: typeof MOVE_INGRIDIENT_CONSTRUCTOR;
    readonly payload: TIngredientItemDragId[];
}

interface addBunConstructorAction {
    readonly type: typeof ADD_BUN_CONSTRUCTOR;
    readonly payload: TIngredientItemDragId;
}

interface getCostAction {
    readonly type: typeof GET_COST;
    readonly payload: number;
}

interface clearConstructorAction {
    readonly type: typeof CLEAR_CONSTRUCTOR;
}

export type TConstructorBurger = 
    | addIngridientsConstructorAction
  | deleteIngridientsConstructorAction
  | moveIngridientsConstructorAction
  | addBunConstructorAction
  | getCostAction
  | clearConstructorAction;

export const addIngridientsConstructor = (ingridient: TIngredientItemDragId ): addIngridientsConstructorAction => ({
    type: ADD_INGRIDIENT_CONSTRUCTOR,
    payload: ingridient,
})

export const deleteIngridientsConstructor = (id: string): deleteIngridientsConstructorAction => ({
    type: DELETE_INGRIDIENT_CONSTRUCTOR,
    payload: id,
})

export const moveIngridientsConstructor = (ingridient: TIngredientItemDragId[]): moveIngridientsConstructorAction => ({
    type: MOVE_INGRIDIENT_CONSTRUCTOR,
    payload: ingridient,
})


export const addBunConstructor = (ingridient: TIngredientItemDragId): addBunConstructorAction  => ({
    type: ADD_BUN_CONSTRUCTOR,
    payload: ingridient,
})


export const getCost = (sum: number): getCostAction => ({
    type: GET_COST,
    payload: sum,
})

export const clearConstructor = (): clearConstructorAction => ({
    type: CLEAR_CONSTRUCTOR,
})
