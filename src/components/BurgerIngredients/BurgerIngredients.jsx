import {  useEffect, useMemo, useRef, useState } from 'react';
import styles from './BurgerIngredients.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList/ItemList';
import Tabs from './Tabs/Tabs';
import { getIngridients } from '../../redux/thunk/getIngridients';
import { getIngredient, ingridientsSelector } from '../../redux/selectors/selectors';
import { ProgressBar } from 'react-loader-spinner'
import { VscWarning } from "react-icons/vsc";

const BurgerIngredients = () => {

    const dispatch = useDispatch();
    const {ingridients, isIngridientsLoading, error} = useSelector(ingridientsSelector)

    useEffect(() => {
        dispatch(getIngridients())
    }, []);   

    const buns = useMemo(() => ingridients.filter(item => item.type === 'bun'), [ingridients]);
    const mains = useMemo(() => ingridients.filter(item => item.type === 'main'), [ingridients]);
    const sauces = useMemo(() => ingridients.filter(item => item.type === 'sauce'), [ingridients]);

    const [currentCategory, setCurrentCategory] = useState(0);

    const scrollArea = useRef(null);
    const refs = useRef([]);

    const setCategory = (index) => {
        refs.current[index].scrollIntoView({ block: 'start', behavior: 'smooth' });
        setCurrentCategory(Number(index));
    }

    useEffect(() => {
        const headers = {};

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                headers[entry.target.id] = entry.isIntersecting;
            });
            for (const header in headers) {
                if (headers[header]) {
                    setCategory(header);
                    break;
                }
            }
        }, { root: scrollArea.current });

        refs.current.forEach(element => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, [refs, ingridients]);

    return (
        <div className={`${styles.BurgerIngredients} mt-10`}>
            <p className='text text_type_main-large mb-5'>
                ???????????????? ????????????
            </p>
            <Tabs currentCategory={currentCategory} setCategory={setCategory} />
            {error === true ?  
                        <div className={styles.error}>
                            <p className="text text_type_main-medium">
                                 ???????????? ??????????????!!! ????????????????
                            </p>
                            <VscWarning style={{ height: 60, width: 60}} />
                        </div>
                    :isIngridientsLoading ? 
                        <div className={styles.loading}>
                            <ProgressBar 
                                height="140"
                                width="140"
                                ariaLabel="progress-bar-loading"
                                wrapperStyle={{}}
                                wrapperClass="progress-bar-wrapper"
                                barColor = '#8B00FF'
                                borderColor = '#51E5FF'
                            />   
                        </div>
                    :
            <div ref={scrollArea} className={styles.BurgerIngredientsContainer}>
                <ItemList index={0} refs={refs} title='??????????' data={buns} />
                <ItemList index={1} refs={refs} title='??????????' data={sauces} />
                <ItemList index={2} refs={refs} title='??????????????' data={mains} />
            </div>}
        </div>
    );
};

export default BurgerIngredients;