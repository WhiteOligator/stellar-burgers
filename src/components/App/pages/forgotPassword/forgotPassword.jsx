import React from 'react';
import AppHeader from '../../../AppHeader/AppHeader';
import style from "./forgotPassword.module.css"
import { useNavigate, NavLink } from "react-router-dom";
import { EmailInput,  Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPasswordThunk, forgotPasswordFalseThunk } from '../../../../redux/thunk/userThunk';
import { forgotSelector } from '../../../../redux/selectors/selectors';


const ForgotPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {forgotPassword, errorForgotPassword} = useSelector(forgotSelector)

    const [value, setValue] = React.useState()
    const onChange = e => {
        setValue(e.target.value)
    }

    const handleForgotPassword = () => {
        let email = {
            email: value
        }
        dispatch(forgotPasswordThunk(email))

    }
    
    if (forgotPassword) {dispatch(forgotPasswordFalseThunk()); navigate('/reset-password')}

    return (
        <div className={style.content}>
            <AppHeader />
            <div className={style.box}>
                <p className="text text_type_main-medium">
                    Восстановление пароля
                </p>
                <EmailInput
                    onChange={onChange}
                    value={value}
                    name={'Укажите email'}
                    isIcon={false}
                />
                <Button htmlType="button" type="primary" size="large" onClick={handleForgotPassword}>
                    Восстановить
                </Button>
                {errorForgotPassword  &&
                    <div className={style.textError}>
                        <p className="text text_type_main-default mt-4">
                            Error: {errorForgotPassword} !!!
                        </p>
                    </div>       
                }
                <p className="text text_type_main-default mt-20">
                    Вспомнили пароль? <NavLink className={style.ref} to='/login'>Войти</NavLink>
                </p>
            </div>
        </div>
    );
}

export default ForgotPassword;
