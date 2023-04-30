import { wsProfileReducer } from './middlewareProfileReducer';
import { openOrderReducer } from './openOrderReducer';
import { combineReducers } from 'redux';
import { ingridientsReducer } from './IngridientsReducer/ingridientsReducer';
import { orderReducer } from './orderReducer';
import { openIngridientReducer } from './openIngridientReducer';
import { constructorBurgerReducer } from './ConstructorBurgerReducer/constructorBurgerReducer';
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
    WsProfile: wsProfileReducer,
}) 