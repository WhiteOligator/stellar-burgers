import { DndProvider } from "react-dnd";
import { openItem, openOderState } from "../../redux/selectors/selectors";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import Modal from "../../components/Modal/Modal";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import style from "./home.module.css"
import { HTML5Backend } from 'react-dnd-html5-backend';
import { cleareOrderThunk } from "../../redux/thunk/order";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";


const Home = () =>  {
    
  const dispatch = useAppDispatch();
   
    const openOrder = useAppSelector(openOderState);

    const handleCloseModal = () => {
      dispatch(cleareOrderThunk())

  }
    
    return (
      <>
          <div className={style.content}>
            <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor />
            </DndProvider>
            <Modal
                title=""
                active={openOrder}
                onClose={handleCloseModal}
            >
                <OrderDetails />
            </Modal>
          </div>
      </>
    );
  }
  
  export default Home;