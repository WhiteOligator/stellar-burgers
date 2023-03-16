import React, { useMemo, useEffect } from 'react';
import style from './IngredientDetailsPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../../components/AppHeader/AppHeader';

import { useParams } from 'react-router-dom';
import IngredientDetails from '../../components/IngredientDetails/IngredientDetails';

const IngredientDetailsPage = () =>  {
       
    const { ingredientId } = useParams();
    const ingredientsItems = useSelector(state => state.ingridients.ingridients);


    const ingredientItem = useMemo(() => {
        return ingredientsItems.find(item => item._id === ingredientId);
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
