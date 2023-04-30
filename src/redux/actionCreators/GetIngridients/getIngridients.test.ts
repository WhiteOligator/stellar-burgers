import { ingredient } from './../../selectors/selectors';
import {
    GET_INGRIDIENTS_FAILED,
    GET_INGRIDIENTS_STARTED,
    GET_INGRIDIENTS_SUCCESS,
} from './../../actionType/getIngridients';
import {
  getIngridientsSuccess,
  getIngridientsFailed,
  getIngridientsStarted,
} from './getIngridients';
import { TIngredientItem } from '../../../utils/TypesAndIntareface';

describe('Action creators GET_INGRIDIENTS_STARTED', () => {
    it('Получение ингридиентов', () => {
        
    
      const expectedAction = {
        type: GET_INGRIDIENTS_STARTED,
      }

      expect(getIngridientsStarted()).toEqual(expectedAction)
    })
  }) 

describe('Action creators GET_INGRIDIENTS_SUCCESS', () => {
    it('Успешное получение ингридиентов', () => {
       
      const ingredients: TIngredientItem[] = [{
        _id: '643d69a5c3f7b9001cfa093c',
        name: "Соус фирменный Space Sauce",
        type: "sauce",
        proteins: 50,
        fat: 100,
        carbohydrates: 93,
        calories: 11,
        price: 111,
        image: "https://code.s3.yandex.net/react/code/sauce-04.png",
        image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
        __v: 0,
      }]

      const allId: string[] = [
        "643d69a5c3f7b9001cfa093c",
        "643d69a5c3f7b9001cfa0941",
        "643d69a5c3f7b9001cfa093e",
        "643d69a5c3f7b9001cfa0942",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa093f",
        "643d69a5c3f7b9001cfa0940",
        "643d69a5c3f7b9001cfa093d",
        "643d69a5c3f7b9001cfa0944",
        "643d69a5c3f7b9001cfa0945",
        "643d69a5c3f7b9001cfa0946",
        "643d69a5c3f7b9001cfa0947",
        "643d69a5c3f7b9001cfa0948",
        "643d69a5c3f7b9001cfa0949",
        "643d69a5c3f7b9001cfa094a",
      ]
    
      const expectedAction = {
        type: GET_INGRIDIENTS_SUCCESS,
        payload: ingredients,
        payloadId: allId,
      }

      expect(getIngridientsSuccess(ingredients, allId)).toEqual(expectedAction)
    })
  }) 

describe('Action creators GET_INGRIDIENTS_FAILED', () => {
    it('Ошибка получения ингридиентов', () => {
        
      const error: string = "error"

      const expectedAction = {
        type: GET_INGRIDIENTS_FAILED,
        payload: error,
      }

      expect(getIngridientsFailed(error)).toEqual(expectedAction)
    })
  }) 



export {}