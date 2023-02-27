import React, {useEffect, useRef, useState, useMemo} from "react";
import style from "./BurgerIngredients.module.css"
import {  Tab, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import Container from "../Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { ingridientsSelector } from "../../redux/selectors/getIngridients";
import { getIngridients } from "../../redux/thunk/getIngridients";
import { ProgressBar } from 'react-loader-spinner'
import { VscWarning } from "react-icons/vsc";


const BurgerIngredients = () => {

    const [currentCategory, setCurrentCategory] = useState(0);
    const scrollArea = useRef(null);
    const bunsRef = useRef(null);
    const saucesRef = useRef(null);
    const fillingsRef = useRef(null);

    const setCategory = (index) => {
        if (index === 0) {
            bunsRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
            setCurrentCategory(Number(index));
        } else if (index === 1) {
            saucesRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
            setCurrentCategory(Number(index));
        } else if (index === 2) {
            fillingsRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
            setCurrentCategory(Number(index));
        }
       
    }
    
    useEffect(() => {
        const headers = {};

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                headers[entry.target.id] = entry.isIntersecting;
            });
            // console.log(entries)
            for (const header in headers) {
                if (headers[header]) {
                    setCategory(header);
                    break;
                }
            }
        }, { root: scrollArea.current });

        [bunsRef.current, saucesRef.current, fillingsRef.current].forEach(element => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    },[bunsRef.current, saucesRef.current, fillingsRef.current, currentCategory] );


    const dispatch = useDispatch()
    const state = useSelector(ingridientsSelector)
    const {ingridients, isIngridientsLoading, error} = state.ingridients



    useEffect(() => {
        dispatch(getIngridients())
    }, []);   

    const bun = useMemo(() => ingridients.filter(item => item.type === 'bun'), [state]);
    const main = useMemo(() => ingridients.filter(item => item.type === 'main'), [state]);
    const sauce = useMemo(() => ingridients.filter(item => item.type === 'sauce'), [state]);

  
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
                        <Tab value={0} active={currentCategory === 0} onClick={setCategory}>
                            Булки
                        </Tab>
                        <Tab value={1} active={currentCategory === 1} onClick={setCategory}>
                            Соусы
                        </Tab>
                        <Tab value={2} active={currentCategory === 2} onClick={setCategory}>
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
                        
                        <div className={style.scroll} ref={scrollArea}>
                            <div id={0} ref={bunsRef}> 
                                <p className="text text_type_main-medium" >     
                                        Булки
                                </p>
                            </div>
                            <Container list={bun} />
                            <div id={1} ref={saucesRef}>
                                <p className="text text_type_main-medium mt-10" >
                                        Соусы
                                </p>
                            </div>
                            <Container list={sauce}  />
                            <div id={2} ref={fillingsRef}>
                                <p className="text text_type_main-medium mt-10">
                                        Начинки
                                </p>
                            </div>
                            <Container list={main}   />                     
                        </div>
                    </div>}
                </div>                                    

            </div>

     );
}



export default BurgerIngredients;


