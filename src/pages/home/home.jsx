import { DndProvider } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { openItem, openOderState } from "../../redux/selectors/selectors";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import Modal from "../../components/Modal/Modal";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import style from "./home.module.css"
import { HTML5Backend } from 'react-dnd-html5-backend';
import { cleareOrderThunk } from "../../redux/thunk/order";


const Home = () =>  {
    
  const dispatch = useDispatch();
   
    const openOrder = useSelector(openOderState);

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