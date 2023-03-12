import React from "react";
import style from "./AppHeader.module.css"
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink } from "react-router-dom";

const AppHeader = () => {
    return (
      
            <header className={style.head}>
                    <div className={style.form1}>
                        <NavLink className="ml-5" to="/">
                            <BurgerIcon type="primary" />
                        </NavLink>
                        <div className="ml-2">
                            <p className="text text_type_main-default">
                                Конструктор
                            </p>
                        </div>
                    </div>
                        <div className={style.form2}>
                            <a className="ml-10 " href="/">
                                <ListIcon type="secondary" />
                            </a>
                            <div className={style.color}>
                                <p className="text text_type_main-default ml-2">
                                    Лента заказов
                                </p>
                            </div>
                        </div>
                    <div className={style.logo}>
                        <div className="">
                            <Logo/>
                        </div> 
                    </div>
                        
                    <div className={style.form_lk}>
                        <NavLink className="ml-5" to="/profile">
                            <ProfileIcon type="secondary" />
                        </NavLink>
                        <div className={style.color}>
                            <p className="text text_type_main-default ml-2">
                                Личный кабинет
                            </p>
                        </div>
                       
                    </div>
            </header>
        
    
      );
}
 
export default AppHeader;