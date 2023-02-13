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
      if (res.status >= 200 && res.status < 300) {
          return res;
      } else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error
      }
    })
    .then(res => res.ok ? res : Promise.reject(res))
    .then(res => res.json())
    .then(data => setData(data.data))
    .catch((e) => {
      console.log('Error: ' + e.message);
      console.log(e.response);
    });

  },[])

  const handleClick =  () => {
    setModalActive(!modalActive)
  }



  const handleClickIngridients = (props) => {
    setModaIngridientslActive(!modalIngridientsActive)
    setClikIngridients(props)
  }

  const handleClickClose = () => {
    setModaIngridientslActive(!modalIngridientsActive)
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
            setActive={setModalActive}
          >
            <OrderDetails handleClick={handleClick} />
          </Modal>
          <Modal
            title={'Детали ингредиента'}
            active={modalIngridientsActive} 
            setActive={setModaIngridientslActive} 
          >
            <IngredientDetails handleClickClose={handleClickClose} clikIngridients={clikIngridients} />
          </Modal>
        </div>
      }
    </>  
  );
}

export default App;
