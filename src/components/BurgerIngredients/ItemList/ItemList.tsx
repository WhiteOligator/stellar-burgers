import styles from './ItemList.module.css';
import Ingredient from '../Ingredient/Ingredient';
import { TIngredientItemMass } from '../../../utils/TypesAndIntareface';

interface ItemListProps {
    title: string;
    data: TIngredientItemMass;
    refs: React.RefObject<HTMLParagraphElement[]>;
    index: number;
}

const ItemList = (props: ItemListProps) => {
    const { title, data, refs, index } = props;

    return (
        <div className={`${styles.ItemList}`}>
            <p id={index.toString()} ref={(item) => {refs.current![index] = item!}} className='text text_type_main-medium mb-6'>
                {title}
            </p>
            <section className={`${styles.Container} ml-4`}>
                {
                    data.map((item) => <Ingredient key={item._id} item={item} />)
                }
            </section>
        </div>
    );
};



export default ItemList;