import styles from './ItemList.module.css';
import Ingredient from '../Ingredient/Ingredient';
import { IngredientItem } from '../../../utils/utils';
import PropTypes from 'prop-types';

const ItemList = (props) => {
    const { title, data, refs, index } = props;

    return (
        <div className={`${styles.ItemList}`}>
            <p id={index} ref={(item) => {refs.current[index] = item}} className='text text_type_main-medium mb-6'>
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

ItemList.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(IngredientItem.isRequired).isRequired,
    refs: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default ItemList;