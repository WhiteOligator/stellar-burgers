import React, {FC} from "react";
import style from "./AppHeader.module.css"
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink } from "react-router-dom";
import { GetCookie } from "../../hooks/Cookie";
import { getUser } from "../../redux/selectors/selectors";
import { useAppSelector } from "../../hooks/hooks";

const AppHeader: FC = () => {

    const user = useAppSelector(getUser);
    const isLoggedIn = GetCookie('accessToken')

    return (
      
            <header className={style.head}>
                    <div className={style.form1}>
                        <NavLink to='/' className={`${style.AppHeaderItem} p-5`}>
                            {({ isActive }) => (
                                <>
                                    <BurgerIcon type={isActive ? 'primary' : 'secondary'} />
                                    <span className={`text text_type_main-default ${isActive ? style.text_color_active : 'text_color_inactive'} ml-2`}>
                                        Конструктор
                                    </span>
                                </>
                            )}
                        </NavLink>
                    </div>
                    <div className={style.form2}>
                        <NavLink to='/feed' className={`${style.AppHeaderItem} p-5`}>
                            {({ isActive }) => (
                                <>
                                    <ListIcon type={isActive ? 'primary' : 'secondary'} />
                                    <span className={`text text_type_main-default ${isActive ? style.text_color_active : 'text_color_inactive'} ml-2`}>
                                        Лента заказов
                                    </span>
                                </>
                            )}
                        </NavLink>
                    </div>
                    <div className={style.logo}>
                        <NavLink
                            to="/"
                        >
                            <Logo/>
                        </NavLink> 
                    </div>
                        
                    <div className={style.form_lk}>
                    <NavLink
                        to='/profile'
                        className={`${style.AppHeaderItem} p-5`}
                        title={isLoggedIn ? 'Перейти в личный кабинет' : 'Войти/Зарегистрироваться'}
                    >
                        {({ isActive }) => (
                            <>
                                <ProfileIcon type={isActive ? 'primary' : 'secondary'} />
                                <span className={`text text_type_main-default ${isActive ? style.text_color_active : 'text_color_inactive'} ml-2`}>
                                    {isLoggedIn ? user.name : 'Личный кабинет'}
                                </span>
                            </>
                        )}
                    </NavLink>
                    </div>
            </header>
        
    
      );
}
 
export default AppHeader;