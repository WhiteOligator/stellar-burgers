
import { ingridientDragMass, ingridientList, stringError } from './../../../utils/testData';
import { initialState, ingridientsReducer} from "./ingridientsReducer"
import *as type from '../../actionType/getIngridients'


describe('constructorBurgerReducer', () => { 
  
    it('Начать получать ингридиенты', () => {

        const newInitialState = {
            ...initialState,
            ingredientsId: ingridientList,
            isIngridientsLoading: false,
        }
   
      const action = {
        type: type.GET_INGRIDIENTS_STARTED,
      }
  
      expect(ingridientsReducer(newInitialState, action)).toEqual({
        ...newInitialState,
        isIngridientsLoading: true,
      })
    })

    it('Ошибка получения ингридиентов', () => { 

        const newInitialState = {
          ...initialState,
          ingredientsId: ingridientList,
          isIngridientsLoading: true,
        }

        const action = {
          type: type.GET_INGRIDIENTS_FAILED,
          payload: stringError,
        }
    
        expect(ingridientsReducer(newInitialState, action)).toEqual({
            ...newInitialState,
            ingridients: [],
            ingredientsId: [],
            isIngridientsLoading: false,
            error: true,
        })
      })

    it('Успешная загрузка', () => {

        const newInitialState = {
          ...initialState,
          isIngridientsLoading: true,
        }

        const action = {
          type: type.GET_INGRIDIENTS_SUCCESS,
          payload: ingridientDragMass,
          payloadId: ingridientList,
        }
    
        expect(ingridientsReducer(newInitialState, action)).toEqual({
          ...newInitialState,
          isIngridientsLoading: false,
          ingridients: action.payload,
          ingredientsId: action.payloadId,
        })
      })

      
  
  })

export {}