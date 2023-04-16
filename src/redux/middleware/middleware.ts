import { TApplicationActions } from './../store';
import type { Middleware, MiddlewareAPI } from 'redux';
import { TWSStoreActions } from '../../utils/TypesAndIntareface';
import type {AppDispatch, RootState } from '../store';

export const socketMiddleware = (wsUrl: string, wsActions: TWSStoreActions): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
      let socket: WebSocket | null = null;
  
      return next => (action: TApplicationActions) => {
        const { dispatch, getState } = store;
        const { type } = action;
        const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;
      
        if (type === wsInit) {
          socket = new WebSocket(`${wsUrl}`);
          
        }
        if (socket) {
          socket.onopen = event => {
            dispatch({ type: onOpen, payload: event });
          };
  
          socket.onerror = event => {
            dispatch({ type: onError, payload: event });
          };
  
          socket.onmessage = event => {
            const { data } = event;

            const parsedData: IMessageResponse = JSON.parse(data);
            const { success, ...restParsedData } = parsedData;
  
            dispatch({ type: onMessage, payload: parsedData });
          };
  
          socket.onclose = event => {
            dispatch({ type: onClose, payload: event });
          };
  
          if (type === wsSendMessage) {
            const payload = action.payload;
            const message = { ...(payload as IMessage), token: user?.token };
            socket.send(JSON.stringify(message));
          }
        }
  
        next(action);
      };
    }) as Middleware;
  };