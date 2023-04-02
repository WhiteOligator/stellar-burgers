import React, { useEffect, useMemo } from 'react';
import style from './profile.module.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { Input, EmailInput, PasswordInput, EditIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { GetCookie, RemoveCookie } from '../../hooks/Cookie';
import { getUserThunk, logoutThunk, updateUserCreatorNull, updateUserThunk } from '../../redux/thunk/userThunk';
import { getUser, updateSuccess, userError, userUpdateStart } from '../../redux/selectors/selectors';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProgressBar } from 'react-loader-spinner'
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';


const Profile = () => {

    const isLoggedIn = useAppSelector(userUpdateStart)
    const user = useAppSelector(getUser)


   
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
 
    const success = useAppSelector(updateSuccess)
  
    const formik = useFormik({
        initialValues: {
          name: user.name,
          email: user.email,
          password: ''
        },
        onSubmit: values => {
          let config = {
            name: values.name,
            email: values.email,
            password: values.password
          }
          dispatch(updateUserThunk(config))
        },
  });

   
    useEffect(() => {
        formik.values.name = user.name
        formik.values.email = user.email
        formik.values.password = ''
    }, [success]);

 
    const handleUserCleare = () => {
        dispatch(getUserThunk())
        formik.values.name = user.name
        formik.values.email = user.email
        formik.values.password = ''
    }

    const logout = () => {
        dispatch(updateUserCreatorNull())
        const refreshToken = GetCookie("refreshToken")

        let congig = {
            token: refreshToken
        }

        dispatch(logoutThunk(congig))
        RemoveCookie("accessToken");
        RemoveCookie("refreshToken");
        
       
        navigate("/login")
    }


    return (
        <>
        {user && 
            <div className={style.content}>
           
            <div className={style.firstBox}>
                <NavLink className={({ isActive }) => (isActive ? style.activeRef: style.ref)} to="/profile">
                    <p className="text text_type_main-medium">
                            Профиль
                    </p>    
                </NavLink>
                <p className="text text_type_main-medium">
                    <NavLink className={({ isActive }) => (isActive ? style.activeRef: style.ref)} to="/profile/orders">История заказов</NavLink>
                </p>
                <div onClick={logout}>
                    <p className="text text_type_main-medium">
                        <NavLink  className={({ isActive }) => (isActive ? style.activeRef: style.ref)} to="/login">Выход</NavLink>
                    </p>
                </div>
                <p className="text text_type_main-default mt-20 text_color_inactive">
                    В этом разделе вы можете изменить свои персональные данные
                </p>
            </div>
            {isLoggedIn  ?
                <div className={style.loading}>
                    <ProgressBar 
                                height="140"
                                width="140"
                                ariaLabel="progress-bar-loading"
                                wrapperClass="progress-bar-wrapper"
                                barColor = '#8B00FF'
                                borderColor = '#51E5FF'
                    />   
                </div>
            :
            <div className={style.secondBox}>
                <form onSubmit={formik.handleSubmit} className={style.form}>
                    <Input
                        onChange={formik.handleChange}
                        value={formik.values.name ? formik.values.name : ''}
                        placeholder={'Имя'}
                        name='name'
                        id='name'
                        icon={'EditIcon'}
                    />
                    <EmailInput
                        onChange={formik.handleChange}
                        value={formik.values.email  ? formik.values.email  : ''}
                        name='email'
                        id='email'
                        
                    />
                    <PasswordInput
                        onChange={formik.handleChange}
                        value={formik.values.password ? formik.values.password : ''}
                        name='password'
                        id='password'
                        icon={'EditIcon'}
                    />
                    <Button htmlType="submit" type="primary" size="medium">
                        Сохранить
                    </Button>
                </form>
                <Button htmlType="button" type="secondary" size="medium" onClick={handleUserCleare} extraClass={style.button}>
                        Отмена
                </Button>
            </div>}
        </div>}
        </>
    );
}

export default Profile;
