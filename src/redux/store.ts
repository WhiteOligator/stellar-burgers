import { rootReducer } from './reducers/rootReducer'; 
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk"; 
import { composeWithDevTools } from '@redux-devtools/extension';


export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
)); 


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;