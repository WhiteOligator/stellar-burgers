import {
    openIngridient,
    deleteIngridient,
    openModal
} from "../actionCreators/OpenIngridient/openIngridient"
import { AppDispatch,  AppThunk } from "../store";

export const openIngridientThunk: AppThunk = (ingridient) => {
    return async (dispatch: AppDispatch) => {
        dispatch(openIngridient(ingridient));  
    }
}

export const openModalThunk: AppThunk = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(openModal());  
    }
}

export const deleteIngridientThunk: AppThunk = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(deleteIngridient());  
    }
}