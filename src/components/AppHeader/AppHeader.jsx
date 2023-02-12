import React from "react";
import style from "./AppHeader.module.css"
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'


const AppHeader = () => {
    return (
        <>
            <header className={style.head}>
                <div className="mt-4" >
                    <div className={style.margin320}> 
                        <div className={style.form1}>
                            <a className="ml-5" href="/">
                                <BurgerIcon type="primary" />
                            </a>
                            <div className="ml-2">
                                <p className="text text_type_main-default">
                                            Конструктор
                                </p>
                            </div>
                        </div>
                        <div className="ml-2">
                            <div className={style.form2}>
                                <a className="ml-5" href="/">
                                    <ListIcon type="secondary" />
                                </a>
                                <div className="ml-2">
                                    <p className="text text_type_main-default" style={{color:'#8585AD'}}>
                                        Лента заказов
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.logo}>
                            <Logo />
                        </div>
                        <div className={style.lk}>
                            <div className={style.form_lk}>
                                <a className="ml-5" href="/">
                                    <ProfileIcon type="secondary" />
                                </a>
                                <div className="ml-2">
                                    <p className="text text_type_main-default" style={{color:'#8585AD'}}>
                                        Личный кабинет
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        
        </>
      );
}
 
export default AppHeader;