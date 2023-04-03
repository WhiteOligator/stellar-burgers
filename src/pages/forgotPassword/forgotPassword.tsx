import React from 'react';
import style from "./forgotPassword.module.css"
import { useNavigate, NavLink } from "react-router-dom";
import { EmailInput,  Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { forgotPasswordThunk, forgotPasswordFalseThunk } from '../../redux/thunk/userThunk';
import { forgotSelector } from '../../redux/selectors/selectors';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {forgotPassword, error} = useAppSelector(forgotSelector)

    const formik = useFormik({
        initialValues: {
          email: '',
        },
        onSubmit: values => {
          let config = {
              email: values.email,
          }
          dispatch(forgotPasswordThunk(config))
        },
    });

    
    if (forgotPassword) { navigate('/reset-password'); }

    return (
        <div className={style.content}>
            <div className={style.box}>
                <p className="text text_type_main-medium">
                    Восстановление пароля
                </p>
                <form onSubmit={formik.handleSubmit} className={style.form}>
                    <EmailInput
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        name='email'
                        id='email'
                        isIcon={false}
                    />
                    <Button type="primary" size="large" htmlType='submit' extraClass='mt-4'>
                        Восстановить
                    </Button>
                </form>
                {error  &&
                    <div className={style.textError}>
                        <p className="text text_type_main-default mt-4">
                            Error: {error} !!!
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
