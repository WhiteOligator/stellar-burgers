import React from 'react';
import style from './IngredientDetails.module.css'
import { useSelector } from 'react-redux';
import { getClikIngridients } from '../../redux/selectors/selectors';

const IngredientDetails = () =>  {

    const clikIngridients = useSelector(getClikIngridients)

    return (
        <section>
            {clikIngridients &&
            <div className={style.container}>
                <img className={style.image_ingr} src={clikIngridients.image_large} alt={clikIngridients.name} />
                <p  className="text text_type_main-medium mt-4">
                        {clikIngridients.name}
                </p>
                <div className='mt-8'>
                    <div className={style.flex}>
                        <div className={style.squer_kall}>
                            <p className="text text_type_main-duefalt">
                                Калории,ккал
                            </p>
                            <p className="text text_type_main-duefalt mt-2">
                                {clikIngridients.calories}
                            </p>
                        </div>
                        <div className="ml-5">
                            <div className={style.squer}>
                                <p className="text text_type_main-duefalt">
                                    Белки, г
                                </p>
                                <p className="text text_type_main-duefalt mt-2">
                                    {clikIngridients.proteins}
                                </p>
                            </div>
                        </div>
                        <div className="ml-5">
                            <div className={style.squer}>
                                <p className="text text_type_main-duefalt">
                                    Жиры, г
                                </p>
                                <p className="text text_type_main-duefalt mt-2">
                                    {clikIngridients.fat}
                                </p>
                            </div>
                        </div>
                        <div className="ml-5">
                            <div className={style.squer}>
                                <p className="text text_type_main-duefalt">
                                    Углеводы, г
                                </p>
                                <p className="text text_type_main-duefalt mt-2">
                                    {clikIngridients.carbohydrates}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            <div className='mt-15'></div>
        </section>
    );
}

export default IngredientDetails;
