import React from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import style from './profileOrders.module.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { GetCookie, RemoveCookie } from '../../hooks/Cookie';
import { logoutThunk } from '../../redux/thunk/userThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import FeedCard from '../../components/feedCard/feedCard';
import { profileOrder } from '../../redux/selectors/selectors';
import { ElementOrders, ProfileElementOrders } from '../../utils/TypesAndIntareface';


const ProfileOrders = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const getProfileOrder = useAppSelector(profileOrder)

    console.log(getProfileOrder)

    const logout = () => {

        const refreshToken = GetCookie("refreshToken")

        let config = {
            token: refreshToken
        }

        dispatch(logoutThunk(config))
        RemoveCookie("accessToken");
        RemoveCookie("refreshToken");

        
        navigate("/login")

    }

    return (
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
            <div className={style.secondBox}>
                <div className={style.FeedsIngredients}>
                    <div className={style.FeedsIngredientsContainer}>
                     
                    </div>
                </div>
            </div>
            <div className={style.Order}>
                <div className={style.OrderContainer}>
                    {/* {getProfileOrder.map((el: ProfileElementOrders, index) => 
                        <FeedCard 
                            key={index}
                            id={el._id}
                            ingredients={el.ingredients}
                            name={el.name}
                            createdAt={el.createdAt}
                            number={el.number}
                            order={el}
                        />
                    )} */}
                </div>
            </div>
        </div>
    );
}

export default ProfileOrders;
