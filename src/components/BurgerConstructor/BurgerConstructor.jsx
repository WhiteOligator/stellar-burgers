import React, {useEffect} from "react";
import style from './BurgerConstructor.module.css'
import { ConstructorElement, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorCard from "./ConstructorCard/ConstructorCard";

const BurgerConstructor = (props) => {
    
 
    const array = props.data
    const randomIngredient = []
    const bun = array.filter(el => el.type === "bun")
    const main = array.filter(el => el.type === "main")
    const sauce = array.filter(el => el.type === "sauce")


    const randomIngredients = (mass1, mass2) => {
        let list1 = mass1;
        let list2 = mass2
        let count1 = Math.floor(Math.random() * 9);
        let count2 = Math.floor(Math.random() * 4);
        
        for (let i = 0; i < count1; i++) {
            randomIngredient.push(list1[Math.floor(Math.random() * 9)])
        }

        for (let i = 0; i < count2; i++) {
            randomIngredient.push(list2[Math.floor(Math.random() * 4)])
        }

        if (randomIngredient.length === 0) {
            randomIngredient.push(list1[0])
        }

        return randomIngredient;

    }    

    

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
                                {randomIngredients(main, sauce).map((el, index) => 

                                           
                                    (<>
                                        {index === 0 ? 
                                            <ConstructorCard 
                                                {...el}
                                                key={index}
                                            /> :
                                            <section className="mt-4">
                                                <ConstructorCard 
                                                    {...el}
                                                    key={index}
                                                />
                                            </section>

                                        }
                                    </>)
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
                                                    <Button onClick={() => props.handleClick()} htmlType="button" type="primary" size="large">
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
 
export default BurgerConstructor;