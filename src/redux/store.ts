import { TWSProfileActions } from './../utils/TypesAndIntareface';
import { rootReducer } from './reducers/rootReducer'; 
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk"; 
import { composeWithDevTools } from '@redux-devtools/extension';

import {TConstructorBurger} from '../redux/actionCreators/constructorBurger'
import {TGetIngredientsAction} from '../redux/actionCreators/getIngridients'
import {TOpenIngredientAction} from '../redux/actionCreators/openIngridient'
import {TOrderAction} from '../redux/actionCreators/order'
import {TUserCreatorsAction} from '../redux/actionCreators/userCreators';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { socketMiddleware } from './middleware/middleware';

import {
    WS_CONNECTION_START,
    WS_SEND_MESSAGE,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_GET_MESSAGE,
} from '../redux/actionType/middlewareActions'
import { TWSActions, TWSStoreActions, TWSStoreProfileActions } from '../utils/TypesAndIntareface';
import { TOpenOrderAction } from './actionCreators/ActionOrder';
import { WS_PROFILE_CONNECTION_START, WS_PROFILE_SEND_MESSAGE, WS_PROFILE_CONNECTION_SUCCESS, WS_PROFILE_CONNECTION_CLOSED, WS_PROFILE_CONNECTION_ERROR, WS_PROFILE_GET_MESSAGE } from './actionType/middlewareProfileOrder';
import { GetCookie } from '../hooks/Cookie';


const wsUrlAll: string = 'wss://norma.nomoreparties.space/orders/all';
const wsUrlProfile: string = 'wss://norma.nomoreparties.space/orders';


const wsActions: TWSStoreActions = {
    wsInit: WS_CONNECTION_START,
    wsSendMessage: WS_SEND_MESSAGE,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_MESSAGE
  };


const wsProfileActions: TWSStoreProfileActions = {
    wsInit:   WS_PROFILE_CONNECTION_START,
    wsSendMessage:   WS_PROFILE_SEND_MESSAGE,
    onOpen:   WS_PROFILE_CONNECTION_SUCCESS,
    onClose:  WS_PROFILE_CONNECTION_CLOSED,
    onError:   WS_PROFILE_CONNECTION_ERROR,
    onMessage:   WS_PROFILE_GET_MESSAGE,
  };

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware, socketMiddleware(wsUrlAll, wsActions), socketMiddleware(wsUrlProfile, wsProfileActions))
)); 


export type TApplicationActions = 
     TConstructorBurger
    | TGetIngredientsAction
    | TOpenIngredientAction
    | TOrderAction
    | TUserCreatorsAction
    | TWSActions
    | TOpenOrderAction
    | TWSProfileActions;



export type RootState = ReturnType<typeof store.getState>;


export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, Action, RootState, TApplicationActions>
>; 



export type AppDispatch = typeof store.dispatch