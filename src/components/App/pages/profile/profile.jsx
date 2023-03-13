import React, { useEffect, useMemo } from 'react';
import AppHeader from '../../../AppHeader/AppHeader';
import style from './profile.module.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { Input, EmailInput, PasswordInput, EditIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { GetCookie, RemoveCookie } from '../../../../hooks/Cookie';
import { getUserThunk, logoutThunk, updateUserCreatorNull, updateUserThunk } from '../../../../redux/thunk/userThunk';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, updateSuccess } from '../../../../redux/selectors/selectors';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProgressBar } from 'react-loader-spinner'
const Profile = () => {

    const isLoggedIn = useSelector(state => state.user.updateStart)
    const error = useSelector(state => state.user.error)
    const user = useSelector(getUser)

    const navigate = useNavigate();
    const dispatch = useDispatch();
 
    const success = useSelector(updateSuccess)
    
    const [email, setEmail] = React.useState('')
    const onChangeEmail = e => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = React.useState('PapaPevegivemybody')
    const onChangePassword = e => {
        setPassword(e.target.value)
    }
    const [name, setName] = React.useState('')
    const onChangeName = e => {
        setName(e.target.value)
    }
    


   
    useEffect(() => {
        setEmail(user.email)
        setName(user.name)
    }, [success]);

 
    
    const handleUpdate = () => {
        let config = {
            email: email,
            name: name,
        }
        dispatch(updateUserThunk(config))

    }

    const handleUser = () => {
        dispatch(getUserThunk())
        setEmail(user.email)
        setName(user.name)
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
        {user !== [] && 
            <div className={style.content}>
            <AppHeader />
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
                                wrapperStyle={{}}
                                wrapperClass="progress-bar-wrapper"
                                barColor = '#8B00FF'
                                borderColor = '#51E5FF'
                    />   
                </div>
            :
            <div className={style.secondBox}>
                <Input
                    onChange={onChangeName}
                    value={name}
                    placeholder={'Имя'}
                    name={'Имя'}
                    icon={'EditIcon'}
                />
                <EmailInput
                    onChange={onChangeEmail}
                    value={email}
                    name={'Укажите email'}
                    icon={'EditIcon'}
                />
                <PasswordInput
                     onChange={onChangePassword}
                     value={password}
                     name={'password'}
                     icon={'EditIcon'}
                />
                {error !== "" &&
                    <div className={style.textError}>
                        <p className="text text_type_main-default mt-4">
                            Error: {error} !!!
                        </p>
                    </div>    
                }
                <Button htmlType="button" type="primary" size="medium" onClick={handleUpdate}>
                    Сохранить
                </Button>
                <Button htmlType="button" type="secondary" size="medium" onClick={handleUser}>
                    Отмена
                </Button>
            </div>}
        </div>}
        </>
    );
}

export default Profile;
