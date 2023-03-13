import {
    OPEN_INGRIDIENT,
    DELETE_INGRIDIENT,
    OPEN_MODAL
} from "../actionType/openIngridient"

export const openIngridient = (ingridient) => ({
    type: OPEN_INGRIDIENT,
    payload: ingridient,
})

export const deleteIngridient = () => ({
    type: DELETE_INGRIDIENT,
})

export const openModal = () => ({
    type: OPEN_MODAL,
})
