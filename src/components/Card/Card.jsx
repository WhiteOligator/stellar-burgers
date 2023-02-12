import React from "react";
import style from "./Card.module.css"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";


const Card = (props) => {
    
                           
                            return (
    
                                <div className={style.line} onClick={() => props.handleClick(props)}>
                                    <div className={style.card}>
                                        <div className="ml-4">
                                            <div className={style.img}>
                                              <img src={props.image} alt="картинка"/>
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <div className={style.price}>
                                                <div className={style.flex}>
                                                    <p className="text text_type_digits-default">
                                                        {props.price}
                                                    </p>
                                                    <div className="ml-2">
                                                            <CurrencyIcon  type="primary" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <div className={style.textCard}>
                                                <p className="text text_type_main-small">
                                                        {props.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
                                );
                            }
 
export default Card;