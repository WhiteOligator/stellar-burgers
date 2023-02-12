import React, { useEffect, useState } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import style from './App.module.css'
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import Modal from './components/Modal/Modal';
import OrderDetails from './components/OrderDetails/OrderDetails';
import IngredientDetails from './components/IngredientDetails/IngredientDetails';




function App() {
  
  const [data, setData] = useState([]);
  const [modalActive, setModalActive] = useState(false)
  const [modalIngridientsActive, setModaIngridientslActive] = useState(false)
  const [clikIngridients, setClikIngridients] = useState([])

  useEffect(() => {
    fetch('https://norma.nomoreparties.space/api/ingredients ')
    .then(res => res.json())
    .then(array => setData(array.data))
    .catch(e => {
      console.log("fail fetch")
    })

  },[])

  const handleClick = () => {
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
      <div className={style.app}>
        <AppHeader />
        <BurgerIngredients data={data} handleClickIngridients = {handleClickIngridients}/>
        <BurgerConstructor data={data} handleClick = {handleClick}/>
        <Modal active={modalActive} setActive={setModalActive} children={OrderDetails(handleClick)} />
        <Modal 
          active={modalIngridientsActive} 
          setActive={setModaIngridientslActive} 
          children={IngredientDetails({clikIngridients, handleClickClose})} 
        />
      </div>
  );
}

export default App;
