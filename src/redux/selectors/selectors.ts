import { RootState } from './../store';

export const ingridientsSelector = (state: RootState) => state.ingridients;
export const openItem = (state: RootState) => state.openIngridient.openIngridient;

export const openOderState = (state: RootState) => state.order.openOrder;
export const getBuns = (state: RootState) => state.constructorBurger.whatKindOfBun;

export const getIngridientConstructor = (state: RootState) => state.constructorBurger.ingridients;
export const getCost = (state: RootState) => state.constructorBurger.costOfTheOrder;

export const getIngredient = (state: RootState) => state.ingridients.ingridients;
export const getConstructorItems = (state: RootState) => state.constructorBurger.ingridients;

export const getConstructorItemsBuns = (state: RootState) => state.constructorBurger.whatKindOfBun;
export const getClikIngridients = (state: RootState) => state.openIngridient.ingridient;

export const getOrder = (state: RootState) => state.order.orderNumber;
export const getIsPost = (state: RootState) => state.order.isPost;

export const registerError = (state: RootState) => state.user.error;
export const LoginError = (state: RootState) => state.user.error;

export const isLog = (state: RootState) => state.user.login;
export const isRegister = (state: RootState) => state.user.register;

export const forgotSelector = (state: RootState) => state.user;
export const ResetSelector = (state: RootState) => state.user;

export const getUser = (state: RootState) => state.user.user;
export const updateSuccess = (state: RootState) => state.user.updateSuccess;

export const forgotPassword = (state: RootState) => state.user.forgotPassword;
export const userError = (state: RootState) => state.user.error

export const userUpdateStart = (state: RootState) => state.user.updateStart
export const ingredient = (state: RootState) => state.ingridients.ingridients

export const get_all_orders = (state: RootState) => state.Ws
export const get_orders = (state: RootState) => state.Ws.messages.orders

export const get_open_order = (state: RootState) => state.openOrder
export const get_open_order_order = (state: RootState) => state.openOrder.order

export const get_status_modal = (state: RootState) => state.openOrder.openOrderPage

export const profileOrder = (state: RootState) => state.WsProfile.messages.orders