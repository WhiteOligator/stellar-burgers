import React, { useEffect, useState } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import style from './App.module.css'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';




function App() {
  
  const [data, setData] = useState([]);
  const [modalActive, setModalActive] = useState(false)
  const [modalIngridientsActive, setModaIngridientslActive] = useState(false)
  const [clikIngridients, setClikIngridients] = useState([])

  useEffect(() => {
    fetch('https://norma.nomoreparties.space/api/ingredients ')
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    })
    .then((data) => setData(data.data))
    .catch((e) => {
      console.log('Error: ' + e.message);
      console.log(e.response);
    });

  },[])

  const onClose = () => {
    setModalActive(false)
    setModaIngridientslActive(false)
  }

  const handleClick =  () => {
    setModalActive(!modalActive)
  }



  const handleClickIngridients = (props) => {
    setModaIngridientslActive(!modalIngridientsActive)
    setClikIngridients(props)
  }




  

  return (
    <>
      {data.length !== 0 &&
        <div className={style.content}>
          <AppHeader />
          <BurgerIngredients data={data} handleClickIngridients = {handleClickIngridients}/>
          <BurgerConstructor data={data} handleClick = {handleClick}/>
          <Modal 
            active={modalActive} 
            onClose={onClose}
          >
            <OrderDetails/>
          </Modal>
          <Modal
            title={'Детали ингредиента'}
            active={modalIngridientsActive} 
            onClose={onClose} 
          >
            <IngredientDetails clikIngridients={clikIngridients} />
          </Modal>
        </div>
      }
    </>  
  );
}

export default App;
