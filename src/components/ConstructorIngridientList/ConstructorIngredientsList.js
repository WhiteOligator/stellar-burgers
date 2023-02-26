import OrderedIngredient from "./OrderedIngredient";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { moveIngridientsConstructorThunk } from "../../redux/thunk/constructorBurger";

const ConstructorIngredientsList = ({ ingredients }) => {
    const dispatch = useDispatch();


    const moveCard = useCallback((dragIndex, hoverIndex) => {
       
        const dragCard = ingredients[dragIndex];
        const newCards = [...ingredients]
       
        newCards.splice(dragIndex, 1)

        newCards.splice(hoverIndex, 0, dragCard)

        dispatch(moveIngridientsConstructorThunk(newCards))
    }, [ingredients, dispatch]);

    return (
        ingredients.map((item, index) => (
            <OrderedIngredient key={item.dragId} index={index} item={item} moveCard={moveCard} />
        ))
    )
}

export default ConstructorIngredientsList;