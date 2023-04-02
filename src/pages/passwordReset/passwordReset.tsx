import React from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import style from "./passwordReset.module.css"
import { NavLink, useNavigate } from "react-router-dom";
import { Input,  Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordFalseThunk, resetPasswordThunk } from '../../redux/thunk/userThunk';
import { ResetSelector } from '../../redux/selectors/selectors';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';


const Passwordreset = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const {resetPassword, error} = useAppSelector(ResetSelector)

    const formik = useFormik({
        initialValues: {
          password: '',
          token: '',
        },
        onSubmit: values => {
          let config = {
            password: values.password,
            token: values.token,
          }
          dispatch(resetPasswordThunk(config))
        },
    });

    if (resetPassword) {dispatch(resetPasswordFalseThunk()); navigate('/login')}

    return (
        <div className={style.content}>
            <div className={style.box}>
                <p className="text text_type_main-medium mb-4">
                    Восстановление пароля
                </p>
                <form className={style.form} onSubmit={formik.handleSubmit}>
                    <Input
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder={'Введите новый пароль'}
                        name='password'
                        id='password'
                    />
                    <Input
                        onChange={formik.handleChange}
                        value={formik.values.token}
                        placeholder={'Введите код из письма'}
                        name='token'
                        id='id'
                    />
                    {error  &&
                    <div className={style.textError}>
                        <p className="text text_type_main-default mt-4">
                            Error: {error} !!!
                        </p>
                    </div>       
                }
                    <Button htmlType="submit"  type="primary" size="large" >
                        Сохранить
                    </Button>
                </form>
                <p className="text text_type_main-default mt-20">
                    Вспомнили пароль? <NavLink className={style.ref} to='/login'>Войти</NavLink>
                </p>
            </div>
        </div>
    );
}

export default Passwordreset;
