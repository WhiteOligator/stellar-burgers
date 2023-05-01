import { messages } from '../../../utils/testData';
import *as type from '../../actionType/middlewareProfileOrder'
import {initialState, wsProfileReducer} from './middlewareProfileReducer';

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
            type: type.WS_PROFILE_CONNECTION_SUCCESS,
        }
  
        expect(wsProfileReducer(initialState, action)).toEqual({
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
          type: type.WS_PROFILE_CONNECTION_ERROR,
          payload: evt
        }
    
        expect(wsProfileReducer(initialState, action)).toEqual({
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
          type: type.WS_PROFILE_CONNECTION_CLOSED,
    
        }
    
        expect(wsProfileReducer(initialState, action)).toEqual({
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
          type: type.WS_PROFILE_GET_MESSAGE,
          payload: messages,
        }
    
        expect(wsProfileReducer(initialState, action)).toEqual({
            ...initialState,
                error: undefined,
            messages: action.payload
        })
      })
      
  
  })

export{}