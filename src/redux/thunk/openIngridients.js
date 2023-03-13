import {
    openIngridient,
    deleteIngridient,
    openModal
} from "../actionCreators/openIngridient"

export const openIngridientThunk = (ingridient) => {
    return async (dispatch) => {
        dispatch(openIngridient(ingridient));  
    }
}

export const openModalThunk = () => {
    return async (dispatch) => {
        dispatch(openModal());  
    }
}

export const deleteIngridientThunk = () => {
    return async (dispatch) => {
        dispatch(deleteIngridient());  
    }
}