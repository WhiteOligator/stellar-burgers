import React, {useEffect, FC } from 'react';
import style from "./authorization.module.css"
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useNavigate } from "react-router-dom";
import { loginErrorNullThunk, loginThunk } from '../../redux/thunk/userThunk';
import { isLog, LoginError } from '../../redux/selectors/selectors';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';




const Authorization: FC = () => {

    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(isLog)
    const errorLog = useAppSelector(LoginError)
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(loginErrorNullThunk())
    },[])

    const formik = useFormik({
          initialValues: {
            email: '',
            password: '',
          },
          onSubmit: values => {
            let config = {
                email: values.email,
                password: values.password,
            }
            dispatch(loginThunk(config))
          },
    });

   
    if (isLoggedIn) {navigate(-1)}

    return (
        <div className={style.content}>
            <div className={style.box}>
                <p className="text text_type_main-medium">
                    Вход
                </p>
                <form onSubmit={formik.handleSubmit} className={style.form}>
                    <EmailInput
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            name='email'
                            isIcon={false}
                            id='email'
                    />
                    <PasswordInput
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            name='password'
                            extraClass="mt-4"
                            id="password"
                    />
                     <Button type="primary" size="large" htmlType='submit' extraClass='mt-4'>
                        Войти
                    </Button>
                </form>
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
