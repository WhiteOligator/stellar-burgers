type Ingredient = {
    calories: number,
    carbohydrates: number,
    fat: number,
    image: string,
    image_large: string,
    image_mobile: string,
    name: string,
    price: number,
    proteins: number,
    type: string,
    __v: number,
    _id: string,
};

type RegisterUser = {
    email: string,
    password: string,
    name: string,
};

type LoginUser = {
    email: string,
    password: string,
};

type Logout = {
    token: string,
};

type resetPassword = {
    password: string,
    token: string
};

type ForgotPassword = {
    email: string,
};

type UpdateUser = {
    name: string,
    email: string,
    password: string,
};

type TIngredientItem = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
};

type TIngredientItemDragId = TIngredientItem & {
   dragId: string
};

interface ModalProps  {
    title: string;
    active: boolean;
    onClose: () => void;
    children: React.ReactElement
}

interface ModalOverlayProps  {
    active: boolean;
    onClose: () => void;
    children: React.ReactElement
}

type TIngredientItemMass = TIngredientItem[];

type TUseLocation = {
    hash: string,
    key: string,
    pathname: string,
    search: string,
    state: null | {
        background: {
            hash: string,
            key: string,
            pathname: string,
            search: string,
            state: null,
        }
    }
}

type HeadersObj = {
    0: boolean,
    1: boolean,
    2: boolean,
}
 
interface IResponse {
    success: boolean
}

export type {
    Ingredient, 
    RegisterUser,
    LoginUser,
    Logout,
    ForgotPassword,
    resetPassword,
    UpdateUser,
    TIngredientItem,
    TIngredientItemMass,
    TIngredientItemDragId,
    ModalProps,
    ModalOverlayProps,
    IResponse,
    TUseLocation,
    HeadersObj,
    
}