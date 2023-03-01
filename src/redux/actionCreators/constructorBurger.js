import {
    ADD_INGRIDIENT_CONSTRUCTOR,
    DELETE_INGRIDIENT_CONSTRUCTOR,
    MOVE_INGRIDIENT_CONSTRUCTOR,
    ADD_BUN_CONSTRUCTOR,
    GET_COST,
    CLEAR_CONSTRUCTOR,
} from '../actionType/constructorBurger'
 

export const addIngridientsConstructor = (ingridient) => ({
    type: ADD_INGRIDIENT_CONSTRUCTOR,
    payload: ingridient,
})

export const deleteIngridientsConstructor = (id) => ({
    type: DELETE_INGRIDIENT_CONSTRUCTOR,
    payload: id,
})

export const moveIngridientsConstructor = (ingridient) => ({
    type: MOVE_INGRIDIENT_CONSTRUCTOR,
    payload: ingridient,
})


export const addBunConstructor = (ingridient) => ({
    type: ADD_BUN_CONSTRUCTOR,
    payload: ingridient,
})


export const getCost = (sum) => ({
    type: GET_COST,
    payload: sum,
})

export const clearConstructor = () => ({
    type: CLEAR_CONSTRUCTOR,
})
