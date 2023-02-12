import React from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './ConstructorCard.module.css'

const ConstructorCard = (
            mas
) => {
    const {name, price, image} = mas
    return ( 
        <>
            <section className="ml-4">
                <section className={style.box}>
                    <section className={style.card}>
                        <section className="mt-7">
                         <DragIcon type="primary" />
                        </section>
                        <section className="ml-2">
                            <ConstructorElement
                                text={name}
                                price={price}
                                thumbnail={image}
                            />
                        </section>
                    </section>
                </section>
            </section>
        </>
     );
}
 
export default ConstructorCard;