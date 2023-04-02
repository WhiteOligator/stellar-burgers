import React, { useEffect, FC} from "react";
import style from './BurgerConstructor.module.css'
import { ConstructorElement, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { addBunConstructorThunk, addIngridientsConstructorThunk, clearConstructorThunk, getCostThunk } from "../../redux/thunk/constructorBurger";
import { v4 as uuidv4 } from 'uuid';
import ConstructorIngredientsList from "../ConstructorIngridientList/ConstructorIngredientsList";
import { createOrderThunk } from "../../redux/thunk/order";
import { getBuns, getCost, getIngridientConstructor } from "../../redux/selectors/selectors";
import { GetCookie } from "../../hooks/Cookie";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { TIngredientItem, TIngredientItemDragId } from "../../utils/TypesAndIntareface";

type TIngredientItemMass = TIngredientItemDragId[] 

const BurgerConstructor: FC = () => {

    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const buns = useAppSelector(getBuns)
    const ingridientConstructor = useAppSelector(getIngridientConstructor)
    const cost = useAppSelector(getCost)

   

    const [{isHover}, dropTargerRef] = useDrop({
        accept: 'ingredient',
        collect: monitor => ({
            isHover: monitor.isOver()
        }),
        drop: (item: TIngredientItem) => {
            let addItem = { ...item, dragId: uuidv4()}
            dispatch(addIngridientsConstructorThunk(addItem))
            }
        }
    );

    const [{isHoverBun1}, dropTargerRefBun1]  = useDrop({
        accept: 'bun',
        collect: monitor => ({
            isHoverBun1: monitor.isOver()
        }),
        drop: (item: TIngredientItem) => {
            let addItem = { ...item, dragId: uuidv4()}
            dispatch(addBunConstructorThunk(addItem))
            }
        }
    );

    const [{isHoverBun2}, dropTargerRefBun2] = useDrop({
        accept: 'bun',
        collect: monitor => ({
            isHoverBun2: monitor.isOver()
        }),
        drop: (item: TIngredientItem) => {
            let addItem = { ...item, dragId: uuidv4()}
            dispatch(addBunConstructorThunk(addItem))
            }
        }
    );

    useEffect(() => {
        const getSum = (mass1: TIngredientItemMass, mass2: TIngredientItemMass) => {
            let sum = 0;
            mass1.map((el) => {
                sum = sum + el?.price
            })
            mass2.map((el) => {
                sum = sum + el?.price
            })
            dispatch(getCostThunk(sum))
        }
        getSum(ingridientConstructor, buns)
        
    }, [buns, ingridientConstructor]);


    const borderColorBun1 = isHoverBun1 ? style.please2 : style.please;
    const borderColorWithBun1 = isHoverBun1 ? style.borderActiveWithBun : style.borderWithBun;
    const borderColorWithBun2 = isHoverBun2 ? style.borderActiveWithBun : style.borderWithBun;
    const borderColorBun2 = isHoverBun2 ? style.please2 : style.please;
    const borderIngridient = isHover ? style.borderActive : style.border;


    const makeOrder = () => {
        let cookieAccessToken = GetCookie('accessToken')
        let cookieRefreshToken = GetCookie('refreshToken')
        if (cookieAccessToken) {
            dispatch(createOrderThunk([buns[0], ...ingridientConstructor, buns[1]], cost))
            dispatch(clearConstructorThunk());
        } else if (cookieRefreshToken) {
            console.log("update token POST")
        } else {
            navigate("/login")
        }
    }
   

    return (
            <section className={style.box}>
               <div className="mt-25">
                    <div className={ style.constructorPole }>
                            <div  className="ml-8">
                                <div className="ml-4">
                                    <div ref={dropTargerRefBun1} className={`${isHoverBun1 ? style.onHover : ''}`} >
                                        {buns?.length > 0 ? 
                                            <div className={isHoverBun1 ? borderColorWithBun1 : borderColorWithBun2}>
                                                <ConstructorElement
                                                    type="top"
                                                    isLocked={true}
                                                    text={`${buns[0].name} (верх)`}
                                                    price={buns[0].price}
                                                    thumbnail={buns[0].image}
                                                />
                                            </div>
                                        :
                                        <div className={isHoverBun1 ? borderColorBun1 : borderColorBun2} >
                                            <p className="text text_type_main-medium">
                                                Please add buns
                                            </p>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                            <div ref={dropTargerRef} className={borderIngridient}>
                                <div className={style.scroll} >
                                        {ingridientConstructor && 
                                            <ConstructorIngredientsList ingredients={ingridientConstructor} />
                                        }

                                </div>
                            </div>
                            <div className="ml-8">
                                <div className="ml-4">
                                    <div ref={dropTargerRefBun2} className={`${isHoverBun2 ? style.onHover : ''}`} >
                                        {buns?.length > 0 ? 
                                            <div className={isHoverBun1 ? borderColorWithBun2 : borderColorWithBun1}>
                                                <ConstructorElement
                                                    type="bottom"
                                                    isLocked={true}
                                                    text={`${buns[1].name} (низ)`}
                                                    price={buns[1].price}
                                                    thumbnail={buns[1].image}
                                                />
                                            </div>    
                                        :
                                        <div className={isHoverBun1 ? borderColorBun1 : borderColorBun2}>
                                            <p className="text text_type_main-medium">
                                                Please add buns
                                            </p>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                               
                                    <div className={style.blockPrice}>
                                                <p className="text text_type_digits-medium">{cost}</p>
                                                <div className="ml-2">
                                                    <div className={style.icon}>
                                                        <CurrencyIcon type="primary" />
                                                    </div>

                                                </div>
                                                <div className="ml-10">
                                                    {cost > 0 ?
                                                    <Button 
                                                        onClick={makeOrder} 
                                                        htmlType="button" 
                                                        type="primary" 
                                                        size="large"
                                                    >
                                                        Оформить заказ
                                                    </Button>
                                                    :
                                                    <Button 
                                                        onClick={() => alert("добавьте ингридиенты")}
                                                        htmlType="button" 
                                                        type="primary" 
                                                        size="large"
                                                    >
                                                        Оформить заказ
                                                    </Button>
                                                
                                                }
                                                </div>      
                                    </div>
                            </div>
                        </div>
               </div>
            </section> 
    );
}
 


export default BurgerConstructor;