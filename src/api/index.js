import { getIngridients } from "./getIngridients"
import { registerUser, loginUser, updateToken, logout, forgotPassword, resetPassword, getUser, updateUser } from "./user";

export const api = {
    ingridients: {
        getIngridients,
    },
    user: {
        registerUser,
        loginUser,
        updateToken,
        logout,
        forgotPassword,
        resetPassword,
        getUser,
        updateUser,
    }
};