import { memo, useMemo, useCallback, FC } from 'react';
import styles from './Ingredient.module.css';
import { useDrag } from 'react-dnd';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { openIngridientThunk } from '../../../redux/thunk/openIngridients';
import { getConstructorItems, getConstructorItemsBuns } from '../../../redux/selectors/selectors';
import { Link, useLocation } from 'react-router-dom';
import { TIngredientItem, TIngredientItemMass } from '../../../utils/TypesAndIntareface';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';

interface IngredientProps {
    item: TIngredientItem;
}

const Ingredient: FC<IngredientProps> = ({item}) => {

    const location = useLocation();

    const getType = (type: string) => {
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

    const dispatch = useAppDispatch();

    const constructorItems = useAppSelector(getConstructorItems);
    const constructorItemsBuns = useAppSelector(getConstructorItemsBuns)

    const countItem = useMemo(() => {
        if (item.type === 'bun') return constructorItemsBuns.filter((el) => el._id === item._id).length;
          else   return constructorItems.filter((el) => el._id === item._id).length;
    }, [constructorItems, item._id, constructorItemsBuns]);

    const handleOpen = useCallback((item: TIngredientItem) => {
        dispatch(openIngridientThunk(item))
    }, [dispatch]);

    return (

        <Link
            className={styles.Link}
            to={`/ingredients/${item._id}`}
            state={{ background: location }}
            test-id={'ingredient-item-dnd'}
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



export default Ingredient;