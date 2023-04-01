import { getIngridients } from "./getIngridients"
import { registerUser, loginUser,  logout, forgotPassword, ResetPassword, getUser, updateUser } from "./user";

export const api = {
    ingridients: {
        getIngridients,
    },
    user: {
        registerUser,
        loginUser,
        logout,
        forgotPassword,
        ResetPassword,
        getUser,
        updateUser,
    }
};