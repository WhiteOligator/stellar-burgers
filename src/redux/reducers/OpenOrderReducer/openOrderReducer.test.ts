import { testOrder } from './../../../utils/testData';
import *as type from "../../actionType/openOrder"
import {initialState, openOrderReducer} from './openOrderReducer'

describe('openOrderReducer', () => { 
  
    it('открыть ингридиент', () => {

        const initialState = { 
            order: {
                createdAt: '',
                ingredients: [],
                name: '',
                number: 0,
                status: '',
                updatedAt: '',
                _id: '',
            },
            openOrderBool: false,  
            openOrderPage: true,
          }

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

        const initialState = { 
            order: {
                createdAt: '',
                ingredients: [],
                name: '',
                number: 0,
                status: '',
                updatedAt: '',
                _id: '',
            },
            openOrderBool: true,  
            openOrderPage: true,
          }

        const action = {
          type: type.DELETE_ORDER,
        }
    
        expect(openOrderReducer(initialState, action)).toEqual({
            ...initialState,
            order: initialState.order,
            openOrderBool: false,
        })
      })

    it('Открыть страницу заказа', () => {

        const initialState = { 
            order: {
                createdAt: '',
                ingredients: [],
                name: '',
                number: 0,
                status: '',
                updatedAt: '',
                _id: '',
            },
            openOrderBool: true,  
            openOrderPage: false,
        }
          
        const action = {
          type: type.OPEN_ORDER_NE_MODAL,
          payload: true,
        }
    
        expect(openOrderReducer(initialState, action)).toEqual({
            ...initialState,
            openOrderBool: false,
            openOrderPage: action.payload,
        })
      })

      
  
  })

export{}