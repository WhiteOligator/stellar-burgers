import { messages } from '../../../utils/testData';
import *as type from '../../actionType/middlewareActions'
import {initialState, wsReducer} from './middlewareReducer';

describe('wsReducer', () => { 
  
    it('Успешное соединениец', () => {

        const initialState = { 
            wsConnected: false,
            messages: {
                success: false,
                orders: [],
                total: 0,
                totalToday: 0,
            }
          }

        const action = {
            type: type.WS_CONNECTION_SUCCESS,
        }
  
        expect(wsReducer(initialState, action)).toEqual({
            ...initialState,
                  error: undefined,
            wsConnected: true,
        })
    })

    it('Ошибка соединения', () => { 

        const initialState = { 
            wsConnected: true,
            messages: {
                success: false,
                orders: [],
                total: 0,
                totalToday: 0,
            }
          }

        const evt = new Event("error");

        const action = {
          type: type.WS_CONNECTION_ERROR,
          payload: evt
        }
    
        expect(wsReducer(initialState, action)).toEqual({
            ...initialState,
                error: action.payload,
            wsConnected: false
        })
      })

    it('Закрытие соединения', () => {

        const initialState = { 
            wsConnected: true,
            messages: {
                success: false,
                orders: [],
                total: 0,
                totalToday: 0,
            }
          }
          
        const action = {
          type: type.WS_CONNECTION_CLOSED,
    
        }
    
        expect(wsReducer(initialState, action)).toEqual({
            ...initialState,
                error: undefined,
            wsConnected: false
        })
      })

      it('Получение сообщения', () => {
        
        const initialState = { 
            wsConnected: true,
            messages: {
                success: false,
                orders: [],
                total: 0,
                totalToday: 0,
            }
          }
          
        const action = {
          type: type.WS_GET_MESSAGE,
          payload: messages,
        }
    
        expect(wsReducer(initialState, action)).toEqual({
            ...initialState,
                error: undefined,
            messages: action.payload
        })
      })
      
  
  })

export{}