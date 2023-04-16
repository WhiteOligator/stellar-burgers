import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useMemo } from "react"
import IngredientStroke from "../../../components/ingredientSroke/ingredientStroke";
import { useAppSelector } from "../../../hooks/hooks"
import { get_all_orders, get_open_order_order, get_orders, get_status_modal, ingridientsSelector } from "../../../redux/selectors/selectors";
import { dateСhange, getCost } from "../../../utils/function";
import { ElementOrders, TIngredientItem } from "../../../utils/TypesAndIntareface";
import style from './feedPage.module.css'
import { useParams } from 'react-router-dom';

export const FeedPage = () => {

    const {id} = useParams();
    const order = useAppSelector(get_open_order_order);
    const openModal = useAppSelector(get_status_modal)
    const ingredients = useAppSelector(ingridientsSelector)

    const howStatus = (statusOrder: string) => {
        switch(statusOrder) {
            case 'done':  return 'Выполнен'
            case 'pending':  return 'Готовится'
            case 'created':  return 'Создан'
          }
    }
    const ingredientList =  order.ingredients 

  

    const ingredientForStroke = ingredients.ingridients.filter((el: TIngredientItem) => ingredientList.includes(el._id))

  

    return(
        <div className={`${!openModal ? style.box: style.boxPage } ml-10 mr-10`} >
            {openModal &&
            <div className={style.stroke_center}>
                <p className="text text_type_digits-default">#{order.number}</p>
            </div>}
            <div className={`${style.stroke} mt-10 mb-3`}>
                <p className="text text_type_main-medium">{order.name}</p>
            </div>
            <div className={`${style.stroke} mb-15`} style={{color: '#00CCCC'}}>
                <p className="text text_type_main-default">{howStatus(order.status)}</p>
            </div>
            <div className={`${style.stroke} mb-6`}>
                <p className="text text_type_main-medium">Состав:</p>
            </div>
            <div className={`${style.Ingredients} `}>
                <div className={`${style.IngredientsContainer} mb-10`}>
                    {ingredientForStroke.map((el: TIngredientItem) => 
                        <IngredientStroke
                            key={el._id}
                            ingredient={el}
                            ingredientsList={ingredientList}
                    
                        />
                    
                    )}
                </div>
            </div>
            <div className={`${style.endBlock} mb-8`}>
                <p className="text text_type_main-default text_color_inactive">
                    {dateСhange(order.createdAt)}
                </p>
                <div className={style.cost}>
                    <p className="text text_type_digits-default mr-2">{getCost(ingredientList, ingredientForStroke)}</p>
                    <CurrencyIcon  type="primary" />
                </div>
            </div>
        </div>
    )
}