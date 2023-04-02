import React, { useMemo, useEffect } from 'react';
import style from './IngredientDetailsPage.module.css'

import { useParams } from 'react-router-dom';
import IngredientDetails from '../../components/IngredientDetails/IngredientDetails';
import { useAppSelector } from '../../hooks/hooks';
import { TIngredientItem } from '../../utils/TypesAndIntareface';

const IngredientDetailsPage = () =>  {
       
    const { ingredientId } = useParams();
    const ingredientsItems = useAppSelector(state => state.ingridients.ingridients);

    const ingredientItem = useMemo(() => {
        return ingredientsItems.find((item: TIngredientItem) => item._id === ingredientId);
    }, [ingredientId, ingredientsItems]);


    return (
        <div className={style.content}>
        {ingredientItem &&
            <IngredientDetails clikIngridients={ingredientItem}/>
        }
        </div>
    );
}

export default IngredientDetailsPage;
