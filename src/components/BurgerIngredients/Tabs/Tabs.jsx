import PropTypes from 'prop-types';
import styles from './Tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const Tabs = ({ 
    currentCategory, 
    setCategory 
}) => {
    return (
        <div className={`${styles.Tab} mb-10`}>
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
    );
};

Tabs.propTypes = {
    currentCategory: PropTypes.number.isRequired,
    setCategory: PropTypes.func.isRequired
}

export default Tabs;