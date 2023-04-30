import { API_ENDPOINT } from './../../api/makeRequest';
import {api} from '../../api'
import { TIngredientItem } from '../../utils/TypesAndIntareface'
import { getIngridientsFailed, getIngridientsStarted, getIngridientsSuccess } from '../actionCreators/GetIngridients/getIngridients'
import { AppDispatch,  AppThunk } from '../store'



export const getIngridients: AppThunk = () => {
    return async (dispatch: AppDispatch) => {
        try {

            let massId: string[] = []
            dispatch(getIngridientsStarted());

            const response: any = await api.ingridients.getIngridients();
          
            let data: TIngredientItem[] = response.data.data 

            data.map((el) => {
                massId.push(el._id)
            })

            dispatch(getIngridientsSuccess(data, massId));


        } catch(error: any) {
            dispatch(getIngridientsFailed(error));
        }
    }
}