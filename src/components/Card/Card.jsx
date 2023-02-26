import React from "react";
import style from "./Card.module.css"
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { ingredientType } from "../../utils/utils";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { openIngridientThunk } from "../../redux/thunk/openIngridients";

const Card = (props) => {

    const dispatch = useDispatch();


    const { _id, name, price, image, type } = props.ingredient;

    const inConstructor = useSelector(state => state.constructorBurger.ingridients)
    const bun = useSelector(state => state.constructorBurger.whatKindOfBun)
    

    const getCount = (id, item) => {
        let count = 0
        
        item?.map((el) => {
            if (el._id === id) {
                count += 1
            }
        })
        
        return count
    }

    const getType = (type) => {
        if (type === "bun") return 'bun'
            return 'ingredient'
    }

    const [{ opacity }, dragRef] = useDrag({
        type: getType(type),
        item: { ...props.ingredient },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })

    })

                            return (
                                
                                <div ref={dragRef}  style={{ opacity }}>
                                    <section className={style.line} onClick={() => {dispatch(openIngridientThunk(props.ingredient));}}>
                                        <div className={style.card}>

                                            <div className="ml-4">
                                                <div className={style.img}>
                                                    <>
                                                    {getCount(_id, inConstructor) > 0 && 
                                                    <div className={style.counter}>
                                                        <div className={style.text}>
                                                            <p className="text text_type_digits-default">
                                                                { getCount(_id, inConstructor) }
                                                            </p>
                                                        </div>
                                                    </div>}
                                                    {getCount(_id, bun) > 0 && 
                                                        <div className={style.counter}>
                                                            <div className={style.text}>
                                                                <p className="text text_type_digits-default">
                                                                    { getCount(_id, bun) }
                                                                </p>
                                                            </div>
                                                        </div>}
                                                    </>    
                                                    <img src={image} alt={name}/>
                                                </div>
                                            </div>
                                            <div className="mt-1">
                                                <div className={style.price}>
                                                    <div className={style.flex}>
                                                        <p className="text text_type_digits-default">
                                                            {price}
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
                                                        {name}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                           
                                );
    }

Card.propTypes = {
    ingredient: PropTypes.shape(ingredientType).isRequired,

  }; 

                            

export default Card;