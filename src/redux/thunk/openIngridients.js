import {
    openIngridient,
    deleteIngridient,
} from "../actionCreators/openIngridient"

export const openIngridientThunk = (ingridient) => {
    return async (dispatch) => {
        dispatch(openIngridient(ingridient));  
    }
}

export const deleteIngridientThunk = () => {
    return async (dispatch) => {
        dispatch(deleteIngridient());  
    }
}