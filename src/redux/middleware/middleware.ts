import { GetCookie } from './../../hooks/Cookie';
import { TWSStoreProfileActions } from './../../utils/TypesAndIntareface';
import { TApplicationActions } from './../store';
import type { Middleware, MiddlewareAPI } from 'redux';
import { TWSStoreActions } from '../../utils/TypesAndIntareface';
import type {AppDispatch, RootState } from '../store';

const BaseWsUrl = 'wss://norma.nomoreparties.space'

export const socketMiddleware = (payload: string, wsActions: TWSStoreActions | TWSStoreProfileActions): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
      let socket: WebSocket | null = null;
  
      return next => (action: TApplicationActions) => {
        const { dispatch, getState } = store;
        const { type } = action;
        const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;
        const token: string | undefined = GetCookie('accessToken')?.trim()
        
    
        
        if (type === wsInit) {
          socket = new WebSocket(`${BaseWsUrl}${payload}`); 
        } 
   

        if (socket) {
          socket.onopen = event => {
            dispatch({ type: onOpen});
          };
  
          socket.onerror = event => {
            dispatch({ type: onError, payload: event });
          };   
  
          socket.onmessage = event => {
            const { data } = event;

            const parsedData = JSON.parse(data);
      
            dispatch({ type: onMessage, payload: parsedData });
          };
  
          socket.onclose = event => {
            dispatch({ type: onClose});
          };
  
          if (type === wsSendMessage) {
            const payload = action.payload;
            const message = { ...(payload), token: token };
            socket.send(JSON.stringify(message));
          }
        }
  
        next(action);
      };
    }) as Middleware;
  };