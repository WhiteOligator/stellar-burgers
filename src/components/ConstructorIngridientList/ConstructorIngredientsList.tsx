import OrderedIngredient from "./OrderedIngredient";
import React, { useCallback, FC } from "react";
import { moveIngridientsConstructorThunk } from "../../redux/thunk/constructorBurger";
import {TIngredientItemDragId } from "../../utils/TypesAndIntareface";
import { useAppDispatch } from "../../hooks/hooks";

interface ConstructorIngredientsListProps {
    ingredients: TIngredientItemDragId[]
}



const ConstructorIngredientsList: FC<ConstructorIngredientsListProps > = ( {ingredients} ) => {
    const dispatch = useAppDispatch();

    
    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
       
        const dragCard = ingredients[dragIndex];
        const newCards = [...ingredients]
       
        newCards.splice(dragIndex, 1)

        newCards.splice(hoverIndex, 0, dragCard)

        dispatch(moveIngridientsConstructorThunk(newCards))
    }, [ingredients, dispatch]);

    return (
        <>
          {  ingredients.map((item, index) => (
                <OrderedIngredient key={item.dragId} index={index} item={item} moveCard={moveCard} />
            ))}
        </>
    )
}



export default ConstructorIngredientsList;