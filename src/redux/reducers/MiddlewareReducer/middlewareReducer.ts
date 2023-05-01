import  React  from 'react';
import {
    WS_CONNECTION_START,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE,
    WS_SEND_MESSAGE,
} from '../../actionType/middlewareActions'
import {IMessage, TWSActions} from '../../../utils/TypesAndIntareface'

type TWSState = {
    wsConnected: boolean;
    messages: IMessage;
  
    error?: Event;
  }
  
export const initialState: TWSState = {
      wsConnected: false,
      messages: {
        success: false,
        orders: [],
        total: 0,
        totalToday: 0,
      }
}; 

export const wsReducer = (state = initialState, action: TWSActions) => {
    switch (action.type) {
          // Опишем обработку экшена с типом WS_CONNECTION_SUCCESS
          // Установим флаг wsConnected в состояние true
      case WS_CONNECTION_SUCCESS:
        return {
          ...state,
                  error: undefined,
          wsConnected: true
        };
  
          // Опишем обработку экшена с типом WS_CONNECTION_ERROR
          // Установим флаг wsConnected в состояние false и передадим ошибку из action.payload
      case WS_CONNECTION_ERROR:
        return {
          ...state,
                  error: action.payload,
          wsConnected: false
        };
  
          // Опишем обработку экшена с типом WS_CONNECTION_CLOSED, когда соединение закрывается
          // Установим флаг wsConnected в состояние false
      case WS_CONNECTION_CLOSED:
        return {
          ...state,
                  error: undefined,
          wsConnected: false
        };
  
          // Опишем обработку экшена с типом WS_GET_MESSAGE
          // Обработка происходит, когда с сервера возвращаются данные
          // В messages передадим данные, которые пришли с сервера
      case WS_GET_MESSAGE:
        return {
          ...state,
                  error: undefined,
          messages: action.payload
        };
      default:
        return state;
    }
  }; 