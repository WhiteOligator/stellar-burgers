import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, {FC, useCallback, useState} from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getIngredient } from "../../redux/selectors/selectors";
import { RootState } from "../../redux/store";
import { ElementOrders, TIngredientItem } from "../../utils/TypesAndIntareface";
import  './feedCard.css'
import { IngredientIcon } from "./IngredientIconGroup/IngredientIconGroup";
import { Link, useLocation } from 'react-router-dom';
import { openOrder, openOrderModal } from "../../redux/actionCreators/ActionOrder/ActionOrder";
import { dateСhange } from "../../utils/function";
import { howStatus } from "../../pages/feedsPage/feedPage/feedPage";

interface FeedCardProps {
    id: string,
    ingredients: string[]
    name: string
    createdAt: string
    number: number
    order: ElementOrders
}


const FeedCard: FC<FeedCardProps> = ({
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
        allIngredients.map((el) => {
            let ingr = burgerIngredients.filter((ingr) => ingr._id === el)
           
            if (ingr.length !== 0 ) {
                ingrCard.push(ingr[0])
                
            }
        })
        return(ingrCard)
    }

    const IngredientIconList = (ingrList: TIngredientItem[]) => {
        let newIconList: TIngredientItem[] = []
        ingrList.map((el) => {
            if (newIconList.includes(el) === false) {
                newIconList.push(el)
            }
        })

        return newIconList
    }
  

    const GetCostOrder = (massIngredient: TIngredientItem[]) => {
        let cost: number = 0
        massIngredient.map((el) => {
            if (el !== undefined) {
                cost = cost + el?.price
            }
            
        })
        return cost
    }
 
    const icons = IngredientIconList(IngredientCardList(ingredients)).map((el, index) => (
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

    const path = location.pathname === '/feed' ? 'feed' : 'profile/orders'
    
   

    return (
        <Link
            className="Link"
            to={`/${path}/${id}`}
            state={{ background: location }}
        >
            <div 
                className={path === 'feed' ? "card mb-4 mr-2" : "cardProfile mb-4 mr-2"}
                onClick={() => {handleOpen(order)}}
            >
                <div className={path === 'feed' ? "block1" : 'block1Profile'}>
                    <p className="text text_type_main-default">
                        #{number}
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        {dateСhange(createdAt)} 
                    </p>
                </div>
                <div className={path === 'feed' ? "block2" : 'block2Profile'}>
                    <p className="text text_type_main-medium">
                    {name.slice(0, 60)}
                    </p>
                    {path === 'profile/orders' &&
                        <p className="text text_type_main-small mt-2 mb-6">
                            {howStatus(order.status)}
                        </p>
                    }
                </div>
                <div className={path === 'feed' ? "block3" : 'block3Profile'}>
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

export default FeedCard