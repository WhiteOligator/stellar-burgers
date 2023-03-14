import React, {useEffect} from 'react';
import AppHeader from '../../../AppHeader/AppHeader';
import style from "./authorization.module.css"
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginErrorNullThunk, loginThunk } from '../../../../redux/thunk/userThunk';
import { isLog, LoginError } from '../../../../redux/selectors/selectors';


const Authorization = () => {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector(isLog)
    const errorLog = useSelector(LoginError)
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(loginErrorNullThunk())
    },[])

    const [email, setEmail] = React.useState('')
    const onChangeEmail = e => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = React.useState('')
    const onChangePassword = e => {
        setPassword(e.target.value)
    }

    const authorizateUser = () => {
        let config = {
            email: email,
            password: password,
        }
        dispatch(loginThunk(config))
    }

    if (isLoggedIn) return navigate('/')

    return (
        <div className={style.content}>
            <div className={style.box}>
                <p className="text text_type_main-medium">
                    Вход
                </p>
                <EmailInput
                    onChange={onChangeEmail}
                    value={email}
                    name={'email'}
                    isIcon={false}
                />
                <PasswordInput
                    onChange={onChangePassword}
                    value={password}
                    name={'password'}
                />
                <Button htmlType="button" type="primary" size="large" onClick={authorizateUser}>
                    Войти
                </Button>
                {errorLog  &&
                    <div className={style.textError}>
                        <p className="text text_type_main-default mt-4">
                            Error: {errorLog} !!!
                        </p>
                    </div>       
                }
                <p className="text text_type_main-default mt-20">
                    Вы — новый пользователь? <NavLink className={style.ref} to='/register'>Зарегистрироваться</NavLink>
                </p>
                <p className="text text_type_main-default">
                    Забыли пароль? <NavLink className={style.ref} to='/forgot-password'>Восстановить пароль</NavLink>
                </p>
            </div>
        </div>
    );
}

export default Authorization;
