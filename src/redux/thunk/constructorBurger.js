import {
    addIngridientsConstructor,
    deleteIngridientsConstructor,
    addBunConstructor,
    moveIngridientsConstructor,
    getCost,
    clearConstructor,
} from '../actionCreators/constructorBurger'



export const addIngridientsConstructorThunk = (ingridient) => {
    return async (dispatch) => {
        dispatch(addIngridientsConstructor(ingridient));
    }
}

export const deleteIngridientsConstructorThunk = (id) => {
    return async (dispatch) => {
        dispatch(deleteIngridientsConstructor(id));
    }
}

export const addBunConstructorThunk = (ingridient) => {
    return async (dispatch) => {
        dispatch(addBunConstructor(ingridient))
    }
}

export const moveIngridientsConstructorThunk = (ingridient) => {
    return async (dispatch) => {
        dispatch(moveIngridientsConstructor(ingridient))
    }
}

export const getCostThunk = (sum) => {
    return async (dispatch) => {
        dispatch(getCost(sum))
    }
}

export const clearConstructorThunk = () => {
    return async (dispatch) => {
        dispatch(clearConstructor())
    } 
}