import { API_ENDPOINT } from './../../api/makeRequest';
import {api} from '../../api'
import { TIngredientItem } from '../../utils/TypesAndIntareface'
import { getIngridientsFailed, getIngridientsStarted, getIngridientsSuccess } from '../actionCreators/getIngridients'
import { AppDispatch,  AppThunk } from '../store'



export const getIngridients: AppThunk = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(getIngridientsStarted());

            const response: any = await api.ingridients.getIngridients();
          
            let data: TIngredientItem[] = response.data.data 

            dispatch(getIngridientsSuccess(data));


        } catch(error: any) {
            dispatch(getIngridientsFailed(error));
        }
    }
}