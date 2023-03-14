import React, { useMemo, useEffect } from 'react';
import style from './IngredientDetailsPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../../../AppHeader/AppHeader';

import { useParams } from 'react-router-dom';
import { getIngridients } from '../../../../redux/thunk/getIngridients';
import { useLocation } from 'react-router-dom';

const IngredientDetailsPage = () =>  {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(getIngridients())
    }, [location.state]);   


    const { ingredientId } = useParams();
    const ingredientsItems = useSelector(state => state.ingridients.ingridients);


    const ingredientItem = useMemo(() => {
        return ingredientsItems.find(item => item._id === ingredientId);
    }, [ingredientId, ingredientsItems]);


    return (
        <div className={style.content}>
        {ingredientItem &&
        <section className={style.margin}>
            <div className={style.container}>
                <img className={style.image_ingr} src={ingredientItem.image_large} alt={ingredientItem.name} />
                <p  className="text text_type_main-medium mt-4">
                        {ingredientItem.name}
                </p>
                <div className='mt-8'>
                    <div className={style.flex}>
                        <div className={style.squer_kall}>
                            <p className="text text_type_main-duefalt">
                                Калории,ккал
                            </p>
                            <p className="text text_type_main-duefalt mt-2">
                                {ingredientItem.calories}
                            </p>
                        </div>
                        <div className="ml-5">
                            <div className={style.squer}>
                                <p className="text text_type_main-duefalt">
                                    Белки, г
                                </p>
                                <p className="text text_type_main-duefalt mt-2">
                                    {ingredientItem.proteins}
                                </p>
                            </div>
                        </div>
                        <div className="ml-5">
                            <div className={style.squer}>
                                <p className="text text_type_main-duefalt">
                                    Жиры, г
                                </p>
                                <p className="text text_type_main-duefalt mt-2">
                                    {ingredientItem.fat}
                                </p>
                            </div>
                        </div>
                        <div className="ml-5">
                            <div className={style.squer}>
                                <p className="text text_type_main-duefalt">
                                    Углеводы, г
                                </p>
                                <p className="text text_type_main-duefalt mt-2">
                                    {ingredientItem.carbohydrates}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-15'></div>
        </section>}
        </div>
    );
}

export default IngredientDetailsPage;
