import { TIngredientItemDragId } from '../../utils/TypesAndIntareface';
import {
    addIngridientsConstructor,
    deleteIngridientsConstructor,
    addBunConstructor,
    moveIngridientsConstructor,
    getCost,
    clearConstructor,
} from '../actionCreators/constructorBurger'
import { AppDispatch, AppThunk } from '../store';


export const addIngridientsConstructorThunk: AppThunk = (ingridient: TIngredientItemDragId) => {
    return async (dispatch: AppDispatch) => {
        dispatch(addIngridientsConstructor(ingridient));
    }
}

export const deleteIngridientsConstructorThunk: AppThunk  = (id: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(deleteIngridientsConstructor(id));
    }
}

export const addBunConstructorThunk: AppThunk = (ingridient) => {
    return async (dispatch: AppDispatch) => {
        dispatch(addBunConstructor(ingridient))
    }
}

export const moveIngridientsConstructorThunk: AppThunk = (ingridient) => {
    return async (dispatch: AppDispatch) => {
        dispatch(moveIngridientsConstructor(ingridient))
    }
}

export const getCostThunk: AppThunk = (sum: number) => {
    return async (dispatch: AppDispatch) => {
        dispatch(getCost(sum))
    }
}

export const clearConstructorThunk: AppThunk = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(clearConstructor())
    } 
}