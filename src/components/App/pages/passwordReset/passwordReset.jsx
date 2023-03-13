import React from 'react';
import AppHeader from '../../../AppHeader/AppHeader';
import style from "./passwordReset.module.css"
import { NavLink, useNavigate } from "react-router-dom";
import { Input,  Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordFalseThunk, resetPasswordThunk } from '../../../../redux/thunk/userThunk';
import { ResetSelector } from '../../../../redux/selectors/selectors';

const Passwordreset = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const {resetPassword, errorResetPassword} = useSelector(ResetSelector)

    const [password, setpassword] = React.useState('')
    const onChangePassword = e => {
        setpassword(e.target.value)
    }

    const [token, setToken] = React.useState('')
    const onChangeToken = e => {
        setToken(e.target.value)
    }

    const handleReset = () => {
        let config = {
            password: password,
            token: token,
        }
        dispatch(resetPasswordThunk(config))
    }

    if (resetPassword) {dispatch(resetPasswordFalseThunk()); navigate('/login')}

    return (
        <div className={style.content}>
            <AppHeader />
            <div className={style.box}>
                <p className="text text_type_main-medium">
                    Восстановление пароля
                </p>
                <Input
                    onChange={onChangePassword}
                    value={password}
                    placeholder={'Введите новый пароль'}
                    name={'Введите новый пароль'}
                  
                />
                 <Input
                    onChange={onChangeToken}
                    value={token}
                    placeholder={'Введите код из письма'}
                    name={'Введите код из письма'}
                
                />
                <Button htmlType="button" type="primary" size="large" onClick={handleReset}>
                    Сохранить
                </Button>
                <p className="text text_type_main-default mt-20">
                    Вспомнили пароль? <NavLink className={style.ref} to='/login'>Войти</NavLink>
                </p>
            </div>
        </div>
    );
}

export default Passwordreset;
