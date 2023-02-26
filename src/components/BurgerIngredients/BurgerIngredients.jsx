import React, {useEffect, useRef} from "react";
import style from "./BurgerIngredients.module.css"
import {  Tab, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import Container from "../Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { ingridientsSelector } from "../../redux/selectors/getIngridients";
import { getIngridients } from "../../redux/thunk/getIngridients";
import { ProgressBar } from 'react-loader-spinner'
import { VscWarning } from "react-icons/vsc";

const BurgerIngredients = (props) => {

    const dispatch = useDispatch()
    const state = useSelector(ingridientsSelector)
    const {ingridients, isIngridientsLoading, error} = state.ingridients
    const [current, setCurrent] = React.useState('Булки')


    useEffect(() => {
        dispatch(getIngridients())
        
    }, []);   

    const bun = ingridients?.filter(el => el.type === "bun")
    const main = ingridients?.filter(el => el.type === "main")
    const sauce = ingridients?.filter(el => el.type === "sauce")
  
    const goTo = (el) =>{
        let elmntToView = document.getElementById(el);
        elmntToView.scrollIntoView({behavior: "smooth"}); 
    }


    

    return ( 
        
            <div className={style.box}>
                <div className="pt-10">
                    <p className="text text_type_main-large">
                        Собери бургер
                    </p>
                </div>
                <div className="pt-5">
                    <div className={style.flex} >
                        <Tab value="Булки" active={current === 'Булки'} onClick={() => {setCurrent('Булки'); goTo("buns");}}>
                            Булки
                        </Tab>
                        <Tab value="Соусы" active={current === 'Соусы'} onClick={() => {setCurrent('Соусы'); goTo("sauces");}}>
                            Соусы
                        </Tab>
                        <Tab value="Начинки" active={current === 'Начинки'} onClick={() => {setCurrent('Начинки'); goTo("fillings");}}>
                            Начинки
                        </Tab>
                    </div>                   
                </div>
                <div className={style.loading} >
                    {error === true ?  
                        <div className={style.error}>
                            <p className="text text_type_main-medium">
                                 Ошибка сервера!!! Извините
                            </p>
                            <VscWarning style={{ height: 60, width: 60}} />
                        </div>
                    :isIngridientsLoading ? 
                        <ProgressBar 
                            height="140"
                            width="140"
                            ariaLabel="progress-bar-loading"
                            wrapperStyle={{}}
                            wrapperClass="progress-bar-wrapper"
                            barColor = '#8B00FF'
                            borderColor = '#51E5FF'
                        />   
                    :
                    
                    <div className="pt-10">
                        
                        <div className={style.scroll}>
                            <p className="text text_type_main-medium" id="buns">     
                                    Булки
                            </p>
                            <Container list={bun} />
                            <p className="text text_type_main-medium mt-10" id="sauces">
                                    Соусы
                            </p>
                            <Container list={sauce}  />
                                <p className="text text_type_main-medium mt-10"  id="fillings">
                                        Начинки
                                </p>
                            <Container list={main}   />                     
                        </div>
                    </div>}
                </div>                                    

            </div>

     );
}



export default BurgerIngredients;


