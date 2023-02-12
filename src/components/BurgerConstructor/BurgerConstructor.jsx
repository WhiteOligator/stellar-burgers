import React, {useEffect, useState} from "react";
import style from './BurgerConstructor.module.css'
import { ConstructorElement, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorCard from "./ConstructorCard/ConstructorCard";
import PropTypes from 'prop-types';

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
        <>
            <section className={style.box}>
               <section className="mt-25">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <section className="ml-8">
                                <section className="ml-4">
                                    <ConstructorElement
                                        type="top"
                                        isLocked={true}
                                        text="Краторная булка N-200i (верх)"
                                        price={200}
                                        thumbnail={bun[0]?.image}
                                    />

                                </section>
                            </section>
                            <section className={style.scroll}>
                                {randomIngredient.length !== 0 && randomIngredient.map((el, index) =>         
                                    (<div key={el._id} >
                                        {index === 0 ? 
                                            <ConstructorCard 
                                                name = {el.name}
                                                price = {el.price}
                                                image = {el.image}
                                            /> :
                                            <section className="mt-4">
                                                <ConstructorCard 
                                                    name = {el.name}
                                                    price = {el.price}
                                                    image = {el.image}
                                                />
                                            </section>

                                        }
                                    </div> )
                                )}
                            </section>
                            <section className="ml-8">
                                <section className="ml-4">
                                    <ConstructorElement
                                        type="bottom"
                                        isLocked={true}
                                        text="Краторная булка N-200i (низ)"
                                        price={200}
                                        thumbnail={bun[0]?.image}
                                    />
                                </section>
                            </section>
                            <section className="mt-10">
                               
                                    <section className={style.blockPrice}>
                                                <p className="text text_type_digits-medium">{getSum(randomIngredient)}</p>
                                                <section className="ml-2">
                                                    <div className={style.icon}>
                                                        <CurrencyIcon type="primary" />
                                                    </div>

                                                </section>
                                                <section className="ml-10">
                                                    <Button 
                                                        onClick={() => props.handleClick()} 
                                                        htmlType="button" 
                                                        type="primary" 
                                                        size="large"
                                                    >
                                                        Оформить заказ
                                                    </Button>
                                                </section>      
                                    </section>
                            </section>
                        </div>
               </section>
            </section>

        </>  
    );
}
 
BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        calories: PropTypes.number,
        carbohydrates: PropTypes.number,
        fat: PropTypes.number,
        image: PropTypes.string,
        image_large: PropTypes.string,
        image_mobile: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        proteins: PropTypes.number,
        type: PropTypes.string,
        __v: PropTypes.number,
        _id: PropTypes.string,
  })).isRequired,
    handleClick:  PropTypes.func.isRequired,  
  }; 
 

export default BurgerConstructor;