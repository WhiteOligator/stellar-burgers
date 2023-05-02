import { evt, messages } from '../../../utils/testData';
import *as type from '../../actionType/middlewareProfileOrder'
import {initialState, wsProfileReducer} from './middlewareProfileReducer';

const WsConnectedTrueInitialState = {
    ...initialState,
    wsConnected: true,
}


describe('wsReducer', () => { 
  
    it('Успешное соединениец', () => {

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

        const action = {
          type: type.WS_PROFILE_CONNECTION_ERROR,
          payload: evt,
        }
    
        expect(wsProfileReducer(WsConnectedTrueInitialState, action)).toEqual({
            ...WsConnectedTrueInitialState,
                error: action.payload,
            wsConnected: false
        })
      })

    it('Закрытие соединения', () => {
        
        const action = {
          type: type.WS_PROFILE_CONNECTION_CLOSED,
        }
    
        expect(wsProfileReducer(WsConnectedTrueInitialState, action)).toEqual({
            ...WsConnectedTrueInitialState,
                error: undefined,
            wsConnected: false
        })
      })

      it('Получение сообщения', () => {
                
        const action = {
          type: type.WS_PROFILE_GET_MESSAGE,
          payload: messages,
        }
    
        expect(wsProfileReducer(WsConnectedTrueInitialState, action)).toEqual({
            ...WsConnectedTrueInitialState,
                error: undefined,
            messages: action.payload
        })
      })
      
  
  })

export{}