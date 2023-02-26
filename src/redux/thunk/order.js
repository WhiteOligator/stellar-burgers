import { api } from '../../api'
import {
    createOrderSuccess,
    createOrderStarted,
    createOrderFailed,
    cleareOrder,
} from '../actionCreators/order'


export const createOrderThunk = (ingridients, cost) => {
    return async (dispatch) => {
        let ingridients_id = []
        ingridients.map((el) => {
            ingridients_id.push(el?._id)
        })
        try {
            dispatch(createOrderStarted())

            dispatch(createOrderSuccess(ingridients, cost));
            const response = await api.ingridients.postIngridients(ingridients_id);

        } catch (error) {
            dispatch(createOrderFailed())
        }
    }
}

export const cleareOrderThunk = () => {
    return async (dispatch) => {
       dispatch(cleareOrder())
    }
}

