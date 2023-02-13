import React from 'react';
import style from './IngredientDetails.module.css'
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/utils';

const IngredientDetails = (props) =>  {
    return (
        <section>
        <img className={style.image_ingr} src={props.clikIngridients.image_large} alt={props.clikIngridients.name} />
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
        <div className='mt-15'></div>
    </section>
    );
}

IngredientDetails.propTypes = {
    handleClickClose: PropTypes.func,
    clikIngridients: PropTypes.oneOfType([
        PropTypes.shape(ingredientType).isRequired,
        PropTypes.array,
      ]),

  }; 

export default IngredientDetails;
