import { ingridientMass } from './../../../utils/testData';
import *as type from '../../actionType/order'
import {initialState, orderReducer} from './orderReducer';

describe('orderReducer', () => { 
  
    it('Создать успешный заказ', () => {

        const initialState = { 
            ingridients: [],
            costOfTheOrder: 0,
            orderNumber: 0,
            isPost: true,
            error: false,
            openOrder: false,
          }

        const action = {
            type: type.CREATE_ORDER_SUCCESS,
            ingridients: ingridientMass,
            cost: 1213,
            orderNumber: 11118,
        }
  
        expect(orderReducer(initialState, action)).toEqual({
            ...initialState,
            ingridients: action.ingridients,
            costOfTheOrder: action.cost,
            orderNumber: action.orderNumber,
            isPost: false,
            openOrder: true,
        })
    })

    it('Начать создавать заказ', () => { 

        const initialState = { 
            ingridients: [],
            costOfTheOrder: 0,
            orderNumber: 0,
            isPost: false,
            error: false,
            openOrder: false,
          }

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

        const initialState = { 
            ingridients: [],
            costOfTheOrder: 0,
            orderNumber: 0,
            isPost: true,
            error: false,
            openOrder: false,
          }
          
        const action = {
          type: type.CREATE_ORDER_FAILED,
          payload: 'error',
        }
    
        expect(orderReducer(initialState, action)).toEqual({
            ...initialState,
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