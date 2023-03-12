import React, { useState, useEffect} from 'react';
import AppHeader from '../../../AppHeader/AppHeader';
import style from "./registration.module.css"
import { NavLink, useNavigate } from "react-router-dom";
import { EmailInput, PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk, setRegisterThunk } from '../../../../redux/thunk/userThunk';
import { isRegister, registerError } from '../../../../redux/selectors/selectors';
import { registerUserErorrNull } from '../../../../redux/actionCreators/userCreators';

const Registration = () => {
    
    const dispatch = useDispatch()
    const erorrReg = useSelector(registerError)
    const navigate = useNavigate()

    const register = useSelector(isRegister)
    console.log(register)

    useEffect(() => {
        dispatch(registerUserErorrNull())

    },[])


    const [name, setName] = React.useState('')
    const onChangeName = e => {
        setName(e.target.value)
    }
    const [password, setPassword] = React.useState('')
    const onChangePassword = e => {
        setPassword(e.target.value)
    }

    const [email, setEmail] = React.useState('')
    const onChangeEmail = e => {
        setEmail(e.target.value)
    }

    const handleRegister = () => {
        dispatch(registerUserErorrNull())

        let config = {
            email: email,
            password: password, 
            name: name,
        }; 
        dispatch(registerThunk(config))
    }

  

    if (register)  {dispatch(setRegisterThunk()); navigate('/login')}

    return (
        <div className={style.content}>
            <AppHeader />
            <div className={style.box}>
                <p className="text text_type_main-medium">
                    Регистрация
                </p>
                <Input
                    onChange={onChangeName}
                    value={name}
                    name={'Имя'}
                    isIcon={false}
                    type={'text'}
                    placeholder={'Имя'}
                    extraClass="mt-6"
                />
                <EmailInput
                    onChange={onChangeEmail}
                    value={email}
                    name={'email'}
                    isIcon={false}
                    extraClass="mt-6"
                />
                <PasswordInput
                    onChange={onChangePassword}
                    value={password}
                    name={'password'}
                    extraClass="mt-6"
                />
                <Button htmlType="button" type="primary" size="large" extraClass="mt-6" onClick={handleRegister}>
                    Зарегистрироваться
                </Button>
                {erorrReg !== "" &&
                    <div className={style.textError}>
                        <p className="text text_type_main-default mt-4">
                            Error: {erorrReg} !!!
                        </p>
                    </div>    
                }
                <p className="text text_type_main-default mt-20">
                    Уже зарегистрированы? <NavLink className={style.ref} to='/login'>Войти</NavLink>
                </p>
            </div>
        </div>
    );
}

export default Registration;
