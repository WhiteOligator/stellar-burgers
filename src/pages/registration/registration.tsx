import React, { useState, useEffect} from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import style from "./registration.module.css"
import { NavLink, useNavigate } from "react-router-dom";
import { EmailInput, PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk, setRegisterThunk } from '../../redux/thunk/userThunk';
import { isRegister, registerError } from '../../redux/selectors/selectors';
import { registerUserErorrNull } from '../../redux/actionCreators/userCreators';
import { useFormik } from 'formik';
import { useAppDispatch } from '../../hooks/hooks';

const Registration = () => {
    
    const dispatch = useAppDispatch()
    const erorrReg = useSelector(registerError)
    const navigate = useNavigate()

    const register = useSelector(isRegister)
  

    useEffect(() => {
        dispatch(registerUserErorrNull())

    },[])




    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: ''
        },
        onSubmit: values => {
            dispatch(registerUserErorrNull())

            let config = {
                email: values.email,
                password: values.password, 
                name: values.name,
            }; 
            dispatch(registerThunk(config))
        },
    });

  


    if (register)  {dispatch(setRegisterThunk()); navigate('/login')}

    return (
        <div className={style.content}>
           
            <div className={style.box}>
                <p className="text text_type_main-medium">
                    Регистрация
                </p>
                <form onSubmit={formik.handleSubmit} className={style.form}>
                    <Input
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        name='name'
                        type='text'
                        id='name'
                        placeholder={'Имя'}
                        extraClass="mt-6"
                    />
                    <EmailInput
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        name='email'
                        id='email'
                        isIcon={false}
                        extraClass="mt-6"
                    
                    />
                    <PasswordInput
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        name='password'
                        id='password'
                        extraClass="mt-6"
                       
                    />
                    <Button htmlType="submit" type="primary" size="large" extraClass="mt-6">
                        Зарегистрироваться
                    </Button>
                </form>
                {erorrReg !== "" && erorrReg !== null &&
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
