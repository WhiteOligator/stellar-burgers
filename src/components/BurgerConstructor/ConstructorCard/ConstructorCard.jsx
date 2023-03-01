import React from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './ConstructorCard.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteIngridientsConstructorThunk } from "../../../redux/thunk/constructorBurger";

const ConstructorCard = ({
    name,
    price,
    image,
    dragId, 
}) => {

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteIngridientsConstructorThunk(id))
    }
    
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
                                handleClose={() => handleDelete(dragId)}
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
    dragId: PropTypes.string.isRequired,
}

export default ConstructorCard;