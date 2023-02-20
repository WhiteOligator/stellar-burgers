import React from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './ConstructorCard.module.css';
import PropTypes from 'prop-types';

const ConstructorCard = ({
    name,
    price,
    image,
}) => {
    
    return ( 
        <>
            <section className="ml-4">
                <div className={style.box}>
                    <div className={style.card}>
                        <div className="mt-7">
                         <DragIcon type="primary" />
                        </div>
                        <div className="ml-2">
                            <ConstructorElement
                                text={name}
                                price={price}
                                thumbnail={image}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

ConstructorCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
 
}

export default ConstructorCard;