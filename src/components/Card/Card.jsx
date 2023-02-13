import React from "react";
import style from "./Card.module.css"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { ingredientType } from "../../utils/utils";

const Card = (props) => {
    
                         
                            return (
    
                                <section className={style.line} onClick={() => props.handleClick(props.mas)}>
                                    <div className={style.card}>
                                        <div className="ml-4">
                                            <div className={style.img}>
                                              <img src={props.mas.image} alt={props.mas.name}/>
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <div className={style.price}>
                                                <div className={style.flex}>
                                                    <p className="text text_type_digits-default">
                                                        {props.mas.price}
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
                                                        {props.mas.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                           
                                );
    }

Card.propTypes = {
    mas: PropTypes.shape(ingredientType).isRequired,
    handleClick: PropTypes.func.isRequired,

  }; 

                            

export default Card;