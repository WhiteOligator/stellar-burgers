import { evt, messages } from '../../../utils/testData';
import *as type from '../../actionType/middlewareActions'
import {initialState, wsReducer} from './middlewareReducer';


const WsConnectedTrueInitialState = {
  ...initialState,
  wsConnected: true,
}


describe('wsReducer', () => { 
  
    it('Успешное соединениец', () => {

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

        const action = {
          type: type.WS_CONNECTION_ERROR,
          payload: evt,
        }
    
        expect(wsReducer(WsConnectedTrueInitialState, action)).toEqual({
            ...WsConnectedTrueInitialState,
                error: action.payload,
            wsConnected: false
        })
      })

    it('Закрытие соединения', () => {

        const action = {
          type: type.WS_CONNECTION_CLOSED,
    
        }
    
        expect(wsReducer(WsConnectedTrueInitialState, action)).toEqual({
            ...WsConnectedTrueInitialState,
                error: undefined,
            wsConnected: false
        })
      })

      it('Получение сообщения', () => {
                  
        const action = {
          type: type.WS_GET_MESSAGE,
          payload: messages,
        }
    
        expect(wsReducer(WsConnectedTrueInitialState, action)).toEqual({
            ...WsConnectedTrueInitialState,
                error: undefined,
            messages: action.payload
        })
      })
      
  
  })

export{}