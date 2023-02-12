import React from 'react';
import style from './IngredientDetails.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const IngredientDetails = (props) => {

    return (
        <>
        <img className={style.image_ingr} src={props.clikIngridients.image_large} alt="ingridient img" />
        <div className={style.name}>
            <p  className="text text_type_main-medium mt-4">
                {props.clikIngridients.name}
            </p>
        </div>
        <div className='mt-8'>
            <div className={style.flex}>
                <div className={style.squer_kall}>
                    <p className="text text_type_main-duefalt">
                         Калории,ккал
                    </p>
                    <p className="text text_type_main-duefalt mt-2">
                        {props.clikIngridients.calories}
                    </p>
                </div>
                <div className="ml-5">
                    <div className={style.squer}>
                        <p className="text text_type_main-duefalt">
                            Белки, г
                        </p>
                        <p className="text text_type_main-duefalt mt-2">
                            {props.clikIngridients.proteins}
                        </p>
                    </div>
                </div>
                <div className="ml-5">
                    <div className={style.squer}>
                        <p className="text text_type_main-duefalt">
                            Жиры, г
                        </p>
                        <p className="text text_type_main-duefalt mt-2">
                            {props.clikIngridients.fat}
                        </p>
                    </div>
                </div>
                <div className="ml-5">
                    <div className={style.squer}>
                        <p className="text text_type_main-duefalt">
                            Углеводы, г
                        </p>
                        <p className="text text_type_main-duefalt mt-2">
                            {props.clikIngridients.carbohydrates}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-15'>

        </div>
    </>
    );
}

IngredientDetails.propTypes = {
    handleClickClose: PropTypes.func,
    clikIngridients: PropTypes.shape({
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

  }; 

export default IngredientDetails;
