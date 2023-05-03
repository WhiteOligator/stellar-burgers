import { wsProfileReducer } from './MiddlewareProfileReducer/middlewareProfileReducer';
import { openOrderReducer } from './OpenOrderReducer/openOrderReducer';
import { combineReducers } from 'redux';
import { ingridientsReducer } from './IngridientsReducer/ingridientsReducer';
import { orderReducer } from './OrderReducer/orderReducer';
import { openIngridientReducer } from './OpenIngridientReducer/openIngridientReducer';
import { constructorBurgerReducer } from './ConstructorBurgerReducer/constructorBurgerReducer';
import { userReducer } from './UserReducer/userReduser';
import { wsReducer } from './MiddlewareReducer/middlewareReducer';

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