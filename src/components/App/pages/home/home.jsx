import { DndProvider } from "react-dnd";
import { useSelector } from "react-redux";
import { openItem, openOderState } from "../../../../redux/selectors/selectors";
import AppHeader from "../../../AppHeader/AppHeader";
import BurgerConstructor from "../../../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../../../BurgerIngredients/BurgerIngredients";
import IngredientDetails from "../../../IngredientDetails/IngredientDetails";
import Modal from "../../../Modal/Modal";
import OrderDetails from "../../../OrderDetails/OrderDetails";
import style from "./home.module.css"
import { HTML5Backend } from 'react-dnd-html5-backend';


const Home = () =>  {

    const openIngridient = useSelector(openItem);
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
                <OrderDetails />
            </Modal>
            <Modal
               title={'Детали ингредиента'}
               active={openIngridient} 
            >
                <IngredientDetails />
            </Modal>
          </div>
      </>
    );
  }
  
  export default Home;