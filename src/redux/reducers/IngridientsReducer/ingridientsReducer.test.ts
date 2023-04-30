import { ingridientDragMass, ingridientList } from './../../../utils/testData';
import { initialState, ingridientsReducer } from "./ingridientsReducer"
import *as type from '../../actionType/getIngridients'


describe('constructorBurgerReducer', () => { 
  
    it('Начать получать ингридиенты', () => {

        const initialState = { 
            ingridients: [],
            ingredientsId: ['ssasdadasd'],
            isIngridientsLoading: false,
            error: false,
          }

      const action = {
        type: type.GET_INGRIDIENTS_STARTED,
      }
  
      expect(ingridientsReducer(initialState, action)).toEqual({
        ...initialState,
        isIngridientsLoading: true,
      })
    })

    it('Ошибка получения ингридиентов', () => { 

        const initialState = { 
            ingridients: [],
            ingredientsId: ['ssasdadasd'],
            isIngridientsLoading: true,
            error: false,
          }

        const action = {
          type: type.GET_INGRIDIENTS_FAILED,
          payload: 'error'
        }
    
        expect(ingridientsReducer(initialState, action)).toEqual({
            ...initialState,
            ingridients: [],
            ingredientsId: [],
            isIngridientsLoading: false,
            error: true,
        })
      })

    it('Успешная загрузка', () => {

        const initialState = { 
            ingridients: [],
            ingredientsId: [],
            isIngridientsLoading: true,
            error: false
          }
          
        const action = {
          type: type.GET_INGRIDIENTS_SUCCESS,
          payload: ingridientDragMass,
          payloadId: ingridientList,
        }
    
        expect(ingridientsReducer(initialState, action)).toEqual({
          ...initialState,
          isIngridientsLoading: false,
          ingridients: action.payload,
          ingredientsId: action.payloadId,
        })
      })

      
  
  })

export {}