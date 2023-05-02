import { ingridientMass, numTest, stringError } from './../../../utils/testData';
import *as type from '../../actionType/order'
import {initialState, orderReducer} from './orderReducer';

const isPostTrueInitialState = {
    ...initialState,
    isPost: true,
}

describe('orderReducer', () => { 
  
    it('Создать успешный заказ', () => {


        const action = {
            type: type.CREATE_ORDER_SUCCESS,
            ingridients: ingridientMass,
            cost: numTest,
            orderNumber: numTest,
        }
  
        expect(orderReducer(isPostTrueInitialState, action)).toEqual({
            ...isPostTrueInitialState,
            ingridients: action.ingridients,
            costOfTheOrder: action.cost,
            orderNumber: action.orderNumber,
            isPost: false,
            openOrder: true,
        })
    })

    it('Начать создавать заказ', () => { 

        const action = {
          type: type.CREATE_ORDER_STARTED,
        }
    
        expect(orderReducer(initialState, action)).toEqual({
            ...initialState,
            isPost: true,
            openOrder: true,
        })
      })

    it('Ошибка открытия страницы заказа', () => {
        
        const action = {
          type: type.CREATE_ORDER_FAILED,
          payload: stringError,
        }
    
        expect(orderReducer(isPostTrueInitialState, action)).toEqual({
            ...isPostTrueInitialState,
            error: true,
            isPost: false,
        })
      })

      it('Очистка заказа', () => {

          
        const action = {
          type: type.CLEARE_ORDER,
        }
    
        expect(orderReducer(initialState, action)).toEqual({
            ...initialState,
        })
      })
      
  
  })

export{}