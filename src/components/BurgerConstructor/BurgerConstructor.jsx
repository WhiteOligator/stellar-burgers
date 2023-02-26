import React, { useEffect} from "react";
import style from './BurgerConstructor.module.css'
import { ConstructorElement, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { ingredientType } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { addBunConstructorThunk, addIngridientsConstructorThunk, clearConstructorThunk, getCostThunk } from "../../redux/thunk/constructorBurger";
import { v4 as uuidv4 } from 'uuid';
import ConstructorIngredientsList from "../ConstructorIngridientList/ConstructorIngredientsList";
import { createOrderThunk } from "../../redux/thunk/order";


const BurgerConstructor = (props) => {

    const dispatch = useDispatch();
    const buns = useSelector(state => state.constructorBurger.whatKindOfBun)
    const ingridientConstructor = useSelector(state => state.constructorBurger.ingridients)
    const cost = useSelector(state => state.constructorBurger.costOfTheOrder)

    const [{ isHover }, dropTargerRef] = useDrop({
        accept: 'ingredient',
        collect: monitor => ({
            isHover: monitor.isOver()
        }),
        drop(item) {
            let addItem = { ...item, dragId: uuidv4()}
            dispatch(addIngridientsConstructorThunk(addItem))
            }
        }
    );

    const [{ isHoverBun1 }, dropTargerRefBun1] = useDrop({
        accept: 'bun',
        collect: monitor => ({
            isHoverBun1: monitor.isOver()
        }),
        drop(item) {
            let addItem = { ...item, dragId: uuidv4()}
            dispatch(addBunConstructorThunk(addItem))
            }
        }
    );

    const [{ isHoverBun2 }, dropTargerRefBun2] = useDrop({
        accept: 'bun',
        collect: monitor => ({
            isHoverBun2: monitor.isOver()
        }),
        drop(item) {
            let addItem = { ...item, dragId: uuidv4()}
            dispatch(addBunConstructorThunk(addItem))
            }
        }
    );

    useEffect(() => {
        const getSum = (mass1, mass2) => {
            let sum = 0;
            mass1?.map((el) => {
                sum = sum + el?.price
            })
            mass2?.map((el) => {
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

   

    return (
            <section className={style.box}>
               <div className="mt-25">
                    <div className={ style.constructor }>
                            <div  className="ml-8">
                                <div className="ml-4">
                                    <div ref={dropTargerRefBun1} className={`${isHoverBun1 ? style.onHover : ''}`} >
                                        {buns?.length > 0 ? 
                                            <div className={isHoverBun1 ? borderColorWithBun1 : borderColorWithBun2}>
                                                <ConstructorElement
                                                    type="top"
                                                    isLocked={true}
                                                    text={buns[0].name}
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
                                            <div className={isHoverBun1 ? borderColorWithBun1 : borderColorWithBun2}>
                                                <ConstructorElement
                                                    type="bottom"
                                                    isLocked={true}
                                                    text={buns[1].name}
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
                                                        onClick={
                                                            () => {
                                                                dispatch(createOrderThunk([buns[0], ...ingridientConstructor, buns[1]], cost))
                                                                dispatch(clearConstructorThunk())
                                                            }
                                                        } 
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