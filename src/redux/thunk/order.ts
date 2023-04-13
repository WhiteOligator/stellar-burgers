import { api } from '../../api'
import {
    createOrderSuccess,
    createOrderStarted,
    createOrderFailed,
    cleareOrder,
} from '../actionCreators/order'
import { API_ENDPOINT } from '../../api/makeRequest'
import { GetCookie } from '../../hooks/Cookie'
import { fetchWithRefresh } from '../../api/user'
import { AppDispatch,  AppThunk } from "../store";
import { TIngredientItem } from '../../utils/TypesAndIntareface'

export const createOrderThunk: AppThunk = (ingridients, cost) => {
    return async (dispatch: AppDispatch) => {
        let ingredients: string[] = []
        ingridients.map((el: TIngredientItem) => {
            ingredients.push(el?._id)
        })
        try {
            dispatch(createOrderStarted())


            fetchWithRefresh(`${API_ENDPOINT}/orders`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    Authorization: 'Bearer' + GetCookie('accessToken'),
                },
                body: JSON.stringify({
                    ingredients,
                }),
            })


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
           
            

        } catch (error: any) {
            dispatch(createOrderFailed(error))
        }
    }
}

export const cleareOrderThunk: AppThunk = () => {
    return async (dispatch: AppDispatch) => {
       dispatch(cleareOrder())
    }
}

