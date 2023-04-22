import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React,{FC} from "react";
import { useAppSelector } from "../../hooks/hooks";
import { ingridientsSelector } from "../../redux/selectors/selectors";
import { TIngredientItem } from "../../utils/TypesAndIntareface";
import style from './ingredientStroke.module.css'


interface IngredientStrokeProps {
    ingredientsList: string[],
    ingredient: TIngredientItem,
}


const IngredientStroke: FC<IngredientStrokeProps> = ({
    ingredient,
    ingredientsList,
}) => {

   

    const getCount = (list: string[]): number => {
        let count: number = 0
        list.map((el) => {
            if (el === ingredient._id) {
                count++
            }
        })
        return count
    }
  
    return (
        
            <div className={`${style.stroke} mr-6 mb-4`}>
                <div className={style.container}>
                    <picture className={style.picture}>
                        <img src={ingredient.image}  alt={'картинка'} width="112" height="56" />
                    </picture>
                </div>
                <div className={`${style.name} ml-4 mr-4`}>
                    <p className="text text_type_main-default">
                        {ingredient.name}
                    </p>
                </div>
                <div className={style.cost}>
                    <p className="text text_type_digits-default mr-2">{getCount(ingredientsList)}x{ingredient.price}</p>
                    <CurrencyIcon  type="primary" />
                </div>
            </div>
        
    )
}


export default IngredientStroke