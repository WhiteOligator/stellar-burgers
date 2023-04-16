import { openOrderReducer } from './openOrderReducer';
import { combineReducers } from 'redux';
import { ingridientsReducer } from './ingridientsReducer';
import { orderReducer } from './orderReducer';
import { openIngridientReducer } from './openIngridientReducer';
import { constructorBurgerReducer } from './constructorBurgerReducer';
import { userReducer } from './userReduser';
import { wsReducer } from './middlewareReducer';

export const rootReducer = combineReducers({
    ingridients: ingridientsReducer,
    order: orderReducer,
    openIngridient: openIngridientReducer,
    constructorBurger: constructorBurgerReducer,
    user: userReducer,
    Ws: wsReducer,
    openOrder: openOrderReducer,
}) 