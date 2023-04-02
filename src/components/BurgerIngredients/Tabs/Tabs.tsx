import PropTypes from 'prop-types';
import styles from './Tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
 

interface TabsProps {
    currentCategory: number,
    setCategory: (value: number) => void
}

const Tabs = ({ 
    currentCategory, 
    setCategory, 
}: TabsProps) => {
    return (
        <div className={`${styles.Tab} mb-10`}>
            <Tab value={'0'} active={currentCategory === 0} onClick={() => setCategory(0)}>
                Булки
            </Tab>
            <Tab value={'1'} active={currentCategory === 1} onClick={() => setCategory(1)}>
                Соусы
            </Tab>
            <Tab value={'2'} active={currentCategory === 2} onClick={() => setCategory(2)}>
                Начинки
            </Tab>
        </div>
    );
};


export default Tabs;