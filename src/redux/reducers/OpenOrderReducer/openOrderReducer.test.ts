import { testOrder } from './../../../utils/testData';
import *as type from "../../actionType/openOrder"
import {initialState, openOrderReducer} from './openOrderReducer'

describe('openOrderReducer', () => { 
  
    it('открыть ингридиент', () => {

        const action = {
            type: type.OPEN_ORDER,
            payload: testOrder,
        }
  
        expect(openOrderReducer(initialState, action)).toEqual({
            ...initialState,
            order: action.payload,
            openOrderBool: true,
        })
    })

    it('Удалить заказ', () => { 

        const newInitialState = { 
            ...initialState,
            openOrderBool: true,  
          }

        const action = {
          type: type.DELETE_ORDER,
        }
    
        expect(openOrderReducer(newInitialState, action)).toEqual({
            ...newInitialState,
            order: initialState.order,
            openOrderBool: false,
        })
      })

    it('Открыть страницу заказа', () => {

        const newinitialState = { 
            ...initialState,
            openOrderBool: true,  
            openOrderPage: false,
        }
          
        const action = {
          type: type.OPEN_ORDER_NE_MODAL,
          payload: true,
        }
    
        expect(openOrderReducer(newinitialState, action)).toEqual({
            ...newinitialState,
            openOrderBool: false,
            openOrderPage: action.payload,
        })
      })

      
  
  })

export{}