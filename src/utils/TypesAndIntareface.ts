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
}




export type {
    Ingredient, 
    RegisterUser,
    LoginUser,
    Logout,
    ForgotPassword,
    resetPassword,
    UpdateUser,

}