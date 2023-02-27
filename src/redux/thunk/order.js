import { api } from '../../api'
import {
    createOrderSuccess,
    createOrderStarted,
    createOrderFailed,
    cleareOrder,
} from '../actionCreators/order'
import { API_ENDPOINT } from '../../api/makeRequest'

export const createOrderThunk = (ingridients, cost) => {
    return async (dispatch) => {
        let ingredients = []
        ingridients.map((el) => {
            ingredients.push(el?._id)
        })
        try {
            dispatch(createOrderStarted())

            const response = await fetch(`${API_ENDPOINT}/orders`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify({
                    ingredients,
                }),
            });
            if (response.status === 200) {
                let result = await response.json();
                let number = result.order.number;
                dispatch(createOrderSuccess(ingridients, cost, number))
            }
           
            

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

