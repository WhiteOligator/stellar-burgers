import React from 'react';
import style from './IngredientDetails.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientDetails = (props) => {

    
    console.log(props)
    return (
        <>
        <div className='ml-10 mt-10'  >
            <section className={style.box}>
                <section className={style.text}>
                    <p className="text text_type_main-large">
                        Детали заказа
                    </p>
                </section>
                <section onClick={() => props.handleClickClose()} className={style.icons}>
                    <CloseIcon  type="primary" />
                </section>
            </section>            
        </div>
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

export default IngredientDetails;
