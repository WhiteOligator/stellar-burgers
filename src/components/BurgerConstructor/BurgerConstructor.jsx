import React from "react";
import style from './BurgerConstructor.module.css'
import { ConstructorElement, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorCard from "./ConstructorCard/ConstructorCard";
import PropTypes from 'prop-types';
import { ingredientType } from "../../utils/utils";

const BurgerConstructor = (props) => {

    const array = props.data
    const bun = array.filter(el => el.type === "bun")
    const main = array.filter(el => el.type === "main" && el.price < 900)
    const sauce = array.filter(el => el.type === "sauce" && el.price < 700 && el.price !== 90)
    const randomIngredient = [...main, ...sauce]

    const getSum = (mass) => {
        let sum = 0;
        mass.map((el) => {
            sum = sum + el?.price
        })
        sum = sum + 400
        return sum
    }
    

    return (
            <section className={style.box}>
               <div className="mt-25">
                    <div className={ style.constructor }>
                            <div className="ml-8">
                                <div className="ml-4">
                                    <ConstructorElement
                                        type="top"
                                        isLocked={true}
                                        text="Краторная булка N-200i (верх)"
                                        price={200}
                                        thumbnail={bun[0]?.image}
                                    />

                                </div>
                            </div>
                            <div className={style.scroll}>
                                {randomIngredient.length !== 0 && randomIngredient.map((el, index) =>         
                                    (<div key={el._id} >
                                        {index === 0 ? 
                                            <ConstructorCard 
                                                name = {el.name}
                                                price = {el.price}
                                                image = {el.image}
                                            /> :
                                            <div className="mt-4">
                                                <ConstructorCard 
                                                    name = {el.name}
                                                    price = {el.price}
                                                    image = {el.image}
                                                />
                                            </div>

                                        }
                                    </div> )
                                )}
                            </div>
                            <div className="ml-8">
                                <div className="ml-4">
                                    <ConstructorElement
                                        type="bottom"
                                        isLocked={true}
                                        text="Краторная булка N-200i (низ)"
                                        price={200}
                                        thumbnail={bun[0]?.image}
                                    />
                                </div>
                            </div>
                            <div className="mt-10">
                               
                                    <div className={style.blockPrice}>
                                                <p className="text text_type_digits-medium">{getSum(randomIngredient)}</p>
                                                <div className="ml-2">
                                                    <div className={style.icon}>
                                                        <CurrencyIcon type="primary" />
                                                    </div>

                                                </div>
                                                <div className="ml-10">
                                                    <Button 
                                                        onClick={() => props.handleClick()} 
                                                        htmlType="button" 
                                                        type="primary" 
                                                        size="large"
                                                    >
                                                        Оформить заказ
                                                    </Button>
                                                </div>      
                                    </div>
                            </div>
                        </div>
               </div>
            </section> 
    );
}
 
BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired,
    handleClick:  PropTypes.func.isRequired,  
  }; 
 

export default BurgerConstructor;