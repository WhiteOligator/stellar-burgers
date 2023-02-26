import {
    GET_INGRIDIENTS_FAILED,
    GET_INGRIDIENTS_STARTED,
    GET_INGRIDIENTS_SUCCESS,
} from '../actionType/getIngridients'

export const getIngridientsSuccess = (ingridients) => ({
    type: GET_INGRIDIENTS_SUCCESS,
    payload: ingridients,
})

export const getIngridientsFailed = (error) => ({
    type: GET_INGRIDIENTS_FAILED,
    payload: error,
})

export const getIngridientsStarted = () => ({
    type: GET_INGRIDIENTS_STARTED,
})