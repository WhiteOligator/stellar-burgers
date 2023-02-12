import React from "react";
import style from "./Card.module.css"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

const Card = (props) => {
    
                         
                            return (
    
                                <div className={style.line} onClick={() => props.handleClick(props.mas)}>
                                    <div className={style.card}>
                                        <div className="ml-4">
                                            <div className={style.img}>
                                              <img src={props.mas.image} alt="картинка"/>
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
                                </div>
                           
                                );
    }

Card.propTypes = {
    mas: PropTypes.shape({
        calories: PropTypes.number,
        carbohydrates: PropTypes.number,
        fat: PropTypes.number,
        image: PropTypes.string,
        image_large: PropTypes.string,
        image_mobile: PropTypes.string,
        handleClick:  PropTypes.func,  
        name: PropTypes.string,
        price: PropTypes.number,
        proteins: PropTypes.number,
        type: PropTypes.string,
        __v: PropTypes.number,
        _id: PropTypes.string,
    }).isRequired,
    handleClick: PropTypes.func.isRequired,

  }; 

                            

export default Card;