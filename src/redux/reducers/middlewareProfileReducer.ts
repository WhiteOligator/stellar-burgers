import  React  from 'react';
import {
    WS_PROFILE_CONNECTION_CLOSED,
    WS_PROFILE_CONNECTION_SUCCESS,
    WS_PROFILE_CONNECTION_ERROR,
    WS_PROFILE_GET_MESSAGE,
} from './../actionType/middlewareProfileOrder';
import {IMessage, TWSActions, TWSProfileActions} from '../../utils/TypesAndIntareface'

type TWSState = {
    wsConnected: boolean;
    messages: IMessage;
  
    error?: Event;
  }
  
const initialState: TWSState = {
      wsConnected: false,
      messages: {
        success: false,
        orders: [],
        total: 0,
        totalToday: 0,
      }
}; 

export const wsProfileReducer = (state = initialState, action: TWSProfileActions) => {
    switch (action.type) {
          // Опишем обработку экшена с типом WS_CONNECTION_SUCCESS
          // Установим флаг wsConnected в состояние true
      case WS_PROFILE_CONNECTION_SUCCESS:
        return {
          ...state,
                  error: undefined,
          wsConnected: true
        };
  
          // Опишем обработку экшена с типом WS_CONNECTION_ERROR
          // Установим флаг wsConnected в состояние false и передадим ошибку из action.payload
      case WS_PROFILE_CONNECTION_ERROR:
        return {
          ...state,
                  error: action.payload,
          wsConnected: false
        };
  
          // Опишем обработку экшена с типом WS_CONNECTION_CLOSED, когда соединение закрывается
          // Установим флаг wsConnected в состояние false
      case WS_PROFILE_CONNECTION_CLOSED:
        return {
          ...state,
                  error: undefined,
          wsConnected: false
        };
  
          // Опишем обработку экшена с типом WS_GET_MESSAGE
          // Обработка происходит, когда с сервера возвращаются данные
          // В messages передадим данные, которые пришли с сервера
      case WS_PROFILE_GET_MESSAGE:
        return {
          ...state,
                  error: undefined,
          messages: action.payload
        };
      default:
        return state;
    }
  }; 