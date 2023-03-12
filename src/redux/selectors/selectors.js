export const ingridientsSelector = state => state.ingridients;
export const openItem = state => state.openIngridient.openIngridient;

export const openOderState = state => state.order.openOrder;
export const getBuns = state => state.constructorBurger.whatKindOfBun;

export const getIngridientConstructor = state => state.constructorBurger.ingridients;
export const getCost = state => state.constructorBurger.costOfTheOrder;

export const getIngredient = state => state.ingridients.ingridients;
export const getConstructorItems = state => state.constructorBurger.ingridients;

export const getConstructorItemsBuns = state => state.constructorBurger.whatKindOfBun;
export const getClikIngridients = state => state.openIngridient.ingridient;

export const getOrder = state => state.order.orderNumber;
export const getIsPost = state => state.order.isPost;

export const registerError = state => state.user.errorRegestration;
export const LoginError = state => state.user.errorLogin;

export const isLog = state => state.user.login;
export const isRegister = state => state.user.register;

export const forgotSelector = state => state.user;
export const ResetSelector = state => state.user;

export const getUser = state => state.user.user;