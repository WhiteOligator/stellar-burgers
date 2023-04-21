import { WS_PROFILE_CONNECTION_START, WS_PROFILE_CONNECTION_SUCCESS, WS_PROFILE_CONNECTION_ERROR, WS_PROFILE_CONNECTION_CLOSED, WS_PROFILE_GET_MESSAGE, WS_PROFILE_SEND_MESSAGE } from './../redux/actionType/middlewareProfileOrder';
import { ingredient } from './../redux/selectors/selectors';
import {
    WS_CONNECTION_START,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE,
    WS_SEND_MESSAGE,
} from '../redux/actionType/middlewareActions'


interface IMessage {
    success: boolean,
    orders: ElementOrders[],
    total: number,
    totalToday: number,
}

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

type TUser = {
    email: string,
    name: string,
}

interface IResponse {
    success: boolean
}

type ElementOrders = {
    createdAt: string
    ingredients: string[]
    name: string
    number: number
    status: string
    updatedAt: string
    _id: string
}

type ProfileElementOrders = {
  createdAt: string
  ingredients: TIngredientItem[]
  name: string
  number: number
  status: string
  updatedAt: string
  _id: string
}

// WS AllOrder

export interface IWSConnectionStart {
    readonly type: typeof WS_CONNECTION_START;
    readonly payload: string;
  }
  
  export interface IWSConnectionSuccessAction {
    readonly type: typeof WS_CONNECTION_SUCCESS;
  }
  
  export interface IWSConnectionErrorAction {
    readonly type: typeof WS_CONNECTION_ERROR;
    readonly payload: Event;
  }
  
  export interface IWSConnectionClosedAction {
    readonly type: typeof WS_CONNECTION_CLOSED;
  }
  
  export interface IWSGetMessageAction {
    readonly type: typeof WS_GET_MESSAGE;
    readonly payload: IMessage;
  }
  
  export interface IWSSendMessageAction {
    readonly type: typeof WS_SEND_MESSAGE;
    readonly payload: {message: string};
  }

export type TWSActions =
  | IWSConnectionStart
  | IWSConnectionSuccessAction
  | IWSConnectionErrorAction
  | IWSConnectionClosedAction
  | IWSGetMessageAction
  | IWSSendMessageAction;

export type TWSStoreActions = {
    wsInit: typeof  WS_CONNECTION_START,
    wsSendMessage: typeof  WS_SEND_MESSAGE,
    onOpen: typeof  WS_CONNECTION_SUCCESS,
    onClose: typeof WS_CONNECTION_CLOSED,
    onError: typeof  WS_CONNECTION_ERROR,
    onMessage: typeof  WS_GET_MESSAGE,
  };

//WS ProfileOrder

export interface IWSConnectionProfileStart {
    readonly type: typeof WS_PROFILE_CONNECTION_START;
    readonly payload: string;
  }
  
  export interface IWSConnectionProfileSuccessAction {
    readonly type: typeof WS_PROFILE_CONNECTION_SUCCESS;
  }
  
  export interface IWSConnectionProfileErrorAction {
    readonly type: typeof WS_PROFILE_CONNECTION_ERROR;
    readonly payload: Event;
  }
  
  export interface IWSConnectionProfileClosedAction {
    readonly type: typeof WS_PROFILE_CONNECTION_CLOSED;
  }
  
  export interface IWSGetProfileMessageAction {
    readonly type: typeof WS_PROFILE_GET_MESSAGE;
    readonly payload: IMessage;
  }
  
  export interface IWSSendProfileMessageAction {
    readonly type: typeof WS_PROFILE_SEND_MESSAGE;
    readonly payload: {message: string};
  }


export type TWSProfileActions =
  | IWSConnectionProfileStart
  | IWSConnectionProfileSuccessAction
  | IWSConnectionProfileErrorAction
  | IWSConnectionProfileClosedAction
  | IWSGetProfileMessageAction
  | IWSSendProfileMessageAction;

export type TWSStoreProfileActions = {
    wsInit: typeof  WS_PROFILE_CONNECTION_START,
    wsSendMessage: typeof  WS_PROFILE_SEND_MESSAGE,
    onOpen: typeof  WS_PROFILE_CONNECTION_SUCCESS,
    onClose: typeof WS_PROFILE_CONNECTION_CLOSED,
    onError: typeof  WS_PROFILE_CONNECTION_ERROR,
    onMessage: typeof  WS_PROFILE_GET_MESSAGE,
  };


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
    TUser,
    IMessage,
    ElementOrders,
    ProfileElementOrders
}