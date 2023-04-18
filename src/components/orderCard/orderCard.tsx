import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { dateСhange } from '../../utils/function'
import { IngredientIcon } from '../feedCard/IngredientIconGroup/IngredientIconGroup'
import style from './orderCard.module.css'

interface FeedCardProps {
    id: string,
    ingredients: string[]
    name: string
    createdAt: string
    number: number
    order: ElementOrders
}


const OrderCard: FC<FeedCardProps> = ({
    id,
    ingredients,
    name,
    createdAt,
    number,
    order,
}) => {


    const location = useLocation();
    const dispatch = useAppDispatch();

    const burgerIngredients = useAppSelector(getIngredient)
    
    const IngredientCardList = (allIngredients: string[]) => {
        let ingrCard: TIngredientItem[] = []
        allIngredients.map((el: string) => {
            let ingr = burgerIngredients.filter((ingr: TIngredientItem) => ingr._id === el)
            if (ingr.length !== 0) {
                ingrCard.push(ingr[0])
            }
        })
        return(ingrCard)
    }
  

    const GetCostOrder = (massIngredient: TIngredientItem[]) => {
        let cost: number = 0
        massIngredient.map((el) => {
            cost = cost + el?.price
        })
        return cost
    }
 
    const icons = IngredientCardList(ingredients).map((el, index) => (
        <IngredientIcon
          key={index}
          src={el?.image}
          srcSet={el?.image}
          len={IngredientCardList(ingredients).length}
          overflow={index}
          extraClass="items_picture"
        />
      ));

      const handleOpen = useCallback((order: ElementOrders) => {
        dispatch(openOrderModal(false))
        dispatch(openOrder(order))
    }, [dispatch]);
  
    return (
        <Link
            className="Link"
            to={`/feed/${id}`}
            state={{ background: location }}
        >
            <div 
                className="card mb-4 mr-2"
                onClick={() => {handleOpen(order)}}
            >
                <div className="block1">
                    <p className="text text_type_main-default">
                        #{number}
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        {dateСhange(createdAt)} 
                    </p>
                </div>
                <div className="block2">
                    <p className="text text_type_main-medium">
                    {name.slice(0, 60)}
                    </p>
                </div>
                <div className="block3">
                    <div className="items_list">{icons}</div>
                    <div className="cost">
                        <p className="text text_type_digits-default mr-2">{GetCostOrder(IngredientCardList(ingredients))}</p>
                        <CurrencyIcon  type="primary" />
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default OrderCard