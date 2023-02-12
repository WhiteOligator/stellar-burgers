import React from "react";
import style from "./BurgerIngredients.module.css"
import {  Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import './BurgerIngredients.module.css';
import Card from "../Card/Card";
import PropTypes from 'prop-types';
import Container from "../Container/Container";



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
                    <div style={{ display: 'flex' }}>
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
    data: PropTypes.arrayOf(PropTypes.shape({
        calories: PropTypes.number,
        carbohydrates: PropTypes.number,
        fat: PropTypes.number,
        image: PropTypes.string,
        image_large: PropTypes.string,
        image_mobile: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        proteins: PropTypes.number,
        type: PropTypes.string,
        __v: PropTypes.number,
        _id: PropTypes.string,
  })).isRequired,
    handleClickIngridients:  PropTypes.func.isRequired,  
  }; 
 

export default BurgerIngredients;


