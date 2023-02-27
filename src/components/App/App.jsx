import React, { useEffect, useState } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import style from './App.module.css'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { openIngridientThunk } from '../../redux/thunk/openIngridients';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';




function App() {

  const openIngridient = useSelector(state => state.openIngridient.openIngridient)
  const openOrder = useSelector(state => state.order.openOrder)
  
  return (
    <>
        <div className={style.content}>
          <AppHeader />
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients  />
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
