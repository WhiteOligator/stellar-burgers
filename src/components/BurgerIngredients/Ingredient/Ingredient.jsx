import { memo, useMemo, useCallback } from 'react';
import styles from './Ingredient.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';
import { IngredientItem } from '../../../utils/utils';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { openIngridientThunk } from '../../../redux/thunk/openIngridients';
import { getConstructorItems, getConstructorItemsBuns } from '../../../redux/selectors/selectors';
import { Link, useLocation } from 'react-router-dom';

const Ingredient = ({ 
    item,
}) => {

    console.log(item)

    const location = useLocation();

    const getType = (type) => {
        if (type === "bun") return 'bun'
            return 'ingredient'
    }

    const [{opacity}, dragRef] = useDrag({
        type: getType(item.type),
        item: {...item},
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    });

    const dispatch = useDispatch();

    const constructorItems = useSelector(getConstructorItems);
    const constructorItemsBuns = useSelector(getConstructorItemsBuns)

    const countItem = useMemo(() => {
        if (item.type === 'bun') return constructorItemsBuns.filter(el => el._id === item._id).length;
          else   return constructorItems.filter(el => el._id === item._id).length;
    }, [constructorItems, item._id, constructorItemsBuns]);

    const handleOpen = useCallback((item) => {
        dispatch(openIngridientThunk(item))
    }, [dispatch]);

    return (

        <Link
            className={styles.Link}
            to={`/ingredients/${item._id}`}
            state={{ background: location }}
            
        >
            <div
                ref={dragRef}
                className={`${styles.Ingredients} mb-8`}
                onClick={() => {handleOpen(item)}}
            >
                <img src={item.image} alt="bun" className={styles.Image} />
                {countItem > 0 && <Counter count={countItem} size='default' extraClass='m-1' />}
                <p className={`text text_type_digits-default m-1 ${styles.Cost}`}>
                    {item.price}
                    <CurrencyIcon type='primary' />
                </p>
                <p className='text text_type_main-default mb-4'>
                    {item.name}
                </p>
            </div>
        </Link>
    );
};

Ingredient.propTypes = {
    item: IngredientItem.isRequired
}

export default Ingredient;