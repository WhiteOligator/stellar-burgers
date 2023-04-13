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



export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
)); 

export type TApplicationActions = 
     TConstructorBurger
    | TGetIngredientsAction
    | TOpenIngredientAction
    | TOrderAction
    | TUserCreatorsAction;

export type RootState = ReturnType<typeof store.getState>;


export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, Action, RootState, TApplicationActions>
>; 



export type AppDispatch = typeof store.dispatch