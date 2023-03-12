import React, { useEffect } from 'react';
import AppHeader from '../../../AppHeader/AppHeader';
import style from './profile.module.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { Input, EmailInput, PasswordInput, EditIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { GetCookie, RemoveCookie } from '../../../../hooks/Cookie';
import { getUserThunk, logoutThunk } from '../../../../redux/thunk/userThunk';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../../redux/selectors/selectors';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
const Profile = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(getUser)
    
    const [email, setEmail] = React.useState(user.email)
    const onChangeEmail = e => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = React.useState('PapaPevegivemybody')
    const onChangePassword = e => {
        setPassword(e.target.value)
    }

    const [name, setName] = React.useState(user.name)
    const onChangeName = e => {
        setName(e.target.value)
    }
    

    useEffect(() => {
        dispatch(getUserThunk())
    }, []);

    const handleUser = () => {
        dispatch(getUserThunk())
        setEmail(user.email)
        setName(user.name)
    }

    const logout = () => {

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
                <Button htmlType="button" type="primary" size="medium">
                    Сохранить
                </Button>
                <Button htmlType="button" type="secondary" size="medium" onClick={handleUser}>
                    Отмена
                </Button>
            </div>
        </div>
    );
}

export default Profile;
