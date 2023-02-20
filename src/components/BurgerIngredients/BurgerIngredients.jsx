import React from "react";
import style from "./BurgerIngredients.module.css"
import {  Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import './BurgerIngredients.module.css';
import PropTypes from 'prop-types';
import Container from "../Container/Container";
import { ingredientType } from "../../utils/utils";



const BurgerIngredients = (props) => {


   
    const [current, setCurrent] = React.useState('Булки')
    const array = props.data

    const bun = array.filter(el => el.type === "bun")
    const main = array.filter(el => el.type === "main")
    const sauce = array.filter(el => el.type === "sauce")
    
    

    return ( 
        <>
            <div className={style.box}>
                <div className="pt-10">
                    <p className="text text_type_main-large">
                        Собери бургер
                    </p>
                </div>
                <div className="pt-5">
                    <div className={style.flex} >
                        <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                            Булки
                        </Tab>
                        <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                            Соусы
                        </Tab>
                        <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
                            Начинки
                        </Tab>
                    </div>                   
                </div>
                <div className="pt-10">
                    <div className={style.scroll}>
                        <p className="text text_type_main-medium">
                            Булки
                        </p>
                        <Container list={bun} handleClickIngridients={props.handleClickIngridients} />
                        <p className="text text_type_main-medium mt-10">
                            Соусы
                        </p>
                        <Container list={sauce} handleClickIngridients={props.handleClickIngridients} />
                        <p className="text text_type_main-medium mt-10">
                            Начинки
                        </p>
                        <Container list={main}  handleClickIngridients={props.handleClickIngridients} />                     
                    </div>
                </div>
                                                    

            </div>
        </>
     );
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired,
    handleClickIngridients:  PropTypes.func.isRequired,  
  }; 
 

export default BurgerIngredients;


