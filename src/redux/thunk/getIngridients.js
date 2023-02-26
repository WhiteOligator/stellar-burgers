import {api} from '../../api'
import { getIngridientsFailed, getIngridientsStarted, getIngridientsSuccess } from '../actionCreators/getIngridients'



export const getIngridients = () => {
    return async (dispatch) => {
        try {
            dispatch(getIngridientsStarted());

            const response = await api.ingridients.getIngridients();
            dispatch(getIngridientsSuccess(response.data.data));


        } catch(error) {
            dispatch(getIngridientsFailed(error));
        }
    }
}