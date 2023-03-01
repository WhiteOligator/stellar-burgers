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