import { combineReducers } from 'redux';
import { ingridientsReducer } from './ingridientsReducer';
import { orderReducer } from './orderReducer';
import { openIngridientReducer } from './openIngridientReducer';
import { constructorBurgerReducer } from './constructorBurgerReducer';

export const rootReducer = combineReducers({
    ingridients: ingridientsReducer,
    order: orderReducer,
    openIngridient: openIngridientReducer,
    constructorBurger: constructorBurgerReducer,
}) 