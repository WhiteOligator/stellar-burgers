import AppHeader from '../AppHeader/AppHeader';
import style from './App.module.css'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import {  useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import { openItem, openOderState } from '../../redux/selectors/selectors';







function App() {

  const openIngridient = useSelector(openItem)
  const openOrder = useSelector(openOderState)
  
  return (
    <>
        <div className={style.content}>
          <AppHeader />
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
          <Modal 
            active={openOrder} 
          >
            <OrderDetails/>
          </Modal>
          <Modal
            title={'Детали ингредиента'}
            active={openIngridient}   
          >
            <IngredientDetails  />
          </Modal>
        </div>
    </>
  );
}

export default App;
