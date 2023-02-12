import React from "react";
import style from "./BurgerIngredients.module.css"
import {  Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import './BurgerIngredients.module.css';
import Card from "../Card/Card";




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
                        <div className="bul">
                            <div className="pt-6 pl-4">
                                <div className={style.flex}>
                                        {bun.map((mas, index) => 
                                                    <>{index === 0 ?
                                                        <Card {...mas} key={index} handleClick={props.handleClickIngridients} />
                                                        : index === 1 ?
                                                        <div className="ml-6">
                                                            <Card {...mas} key={index} handleClick={props.handleClickIngridients} />
                                                        </div>
                                                        
                                                        : index % 2 !== 0 ? 
                                                            <>
                                                            <div className="ml-6 mt-8">
                                                                <Card {...mas} key={index} handleClick={props.handleClickIngridients} />
                                                            </div>
                                                            
                                                            </> : <>
                                                                <div className="mt-8">
                                                                    <Card {...mas} key={index} handleClick={props.handleClickIngridients} />
                                                                </div>   
                                                            </>

                                                    }</>       
                                                )}
                                </div>
                            </div>
                        </div>
                        <div className="mt-10"></div>  
                        <p className="text text_type_main-medium">
                            Соусы
                        </p>
                        <div className="sauce">
                            <div className="pt-6 pl-4">
                                <div className={style.flex}>
                                        {sauce.map((mas, index) => 
                                                    <>{index === 0 ?
                                                        <Card {...mas} key={index} handleClick={props.handleClickIngridients} />
                                                        : index === 1 ?
                                                        <div className="ml-6">
                                                            <Card {...mas} key={index} handleClick={props.handleClickIngridients}/>
                                                        </div>
                                                        
                                                        : index % 2 !== 0 ? 
                                                            <>
                                                            <div className="ml-6 mt-8">
                                                                <Card {...mas} key={index} handleClick={props.handleClickIngridients} />
                                                            </div>
                                                            
                                                            </> : <>
                                                                <div className="mt-8">
                                                                    <Card {...mas} key={index} handleClick={props.handleClickIngridients} />
                                                                </div>   
                                                            </>

                                                    }</>       
                                                )}
                                </div>
                            </div>
                        </div>
                        <div className="mt-10"></div>  
                        <p className="text text_type_main-medium">
                            Начинки
                        </p>
                        <div className="sauce">
                            <div className="pt-6 pl-4">
                                <div className={style.flex}>
                                        {main.map((mas, index) => 
                                                    <>{index === 0 ?
                                                        <Card {...mas} key={index} handleClick={props.handleClickIngridients} />
                                                        : index === 1 ?
                                                        <div className="ml-6">
                                                            <Card {...mas} key={index} handleClick={props.handleClickIngridients} />
                                                        </div>
                                                        
                                                        : index % 2 !== 0 ? 
                                                            <>
                                                            <div className="ml-6 mt-8">
                                                                <Card {...mas} key={index}  handleClick={props.handleClickIngridients}/>
                                                            </div>
                                                            
                                                            </> : <>
                                                                <div className="mt-8">
                                                                    <Card {...mas} key={index} handleClick={props.handleClickIngridients} />
                                                                </div>   
                                                            </>

                                                    }</>       
                                            )}
                                </div>
                            </div>
                        </div>                          
                    </div>
                </div>
                                                    

            </div>
        </>
     );
}
 

export default BurgerIngredients;


