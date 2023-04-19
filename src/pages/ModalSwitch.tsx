import { Route, useNavigate, Routes, useLocation } from 'react-router-dom';
import { deleteIngridientThunk, openIngridientThunk }from '../redux/thunk/openIngridients'
import Modal from '../components/Modal/Modal'
import IngredientDetails from '../components/IngredientDetails/IngredientDetails';
import { getClikIngridients, ingridientsSelector, openItem } from '../redux/selectors/selectors';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { TIngredientItem } from '../utils/TypesAndIntareface';
import { getOpenOrder, getOpenOrderOrder, getOrders, profileOrder } from '../redux/selectors/selectors';
import {  useAppSelector } from '../hooks/hooks';
import { ElementOrders } from '../utils/TypesAndIntareface';
import { deleteOrder, openOrderModal } from '../redux/actionCreators/ActionOrder';
import { FeedPage } from './feedsPage/feedPage/feedPage';
import { openOrder } from '../redux/actionCreators/ActionOrder'

type backgroundType = {
    background: null | object
}

const ModalSwitch = ({ background }: backgroundType) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();

    const {ingridients} = useAppSelector(ingridientsSelector)
    const orders = useAppSelector(getOrders)
    const {openOrderBool, order} = useAppSelector(getOpenOrder)
    const profileOrders = useAppSelector(profileOrder)
    const orderName = useAppSelector(getOpenOrderOrder);
    const openIngredient = useAppSelector(openItem)
    const clikIngridients = useAppSelector(getClikIngridients)
    const ingredient = clikIngridients[0]

    const handleCloseModal = () => {
        dispatch(deleteIngridientThunk());
        navigate(-1);
    }

    const handleCloseModalOrder = () => {
        dispatch(openOrderModal(true))
        dispatch(deleteOrder());
        navigate(-1);
    }

    useEffect(() => {
        const local = location.pathname
        if (local.indexOf('ingredients') === 1 && ingridients) {
            const ingredientName = local.slice(13)
            const ingredient = ingridients.find((el: TIngredientItem) => el._id === ingredientName )
            dispatch(openIngridientThunk(ingredient))
        }

        if (local.indexOf('feed') === 1 && order) {
            const orderName = local.slice(6)
            const order = orders.find((el: ElementOrders) => el._id === orderName )
          
            if (order !== undefined) {
                dispatch(openOrder(order))
            }  
        }

        if (local.indexOf('profile/orders') === 1 && order) {
            const orderName = local.slice(16)
            const order = profileOrders.find((el: ElementOrders) => el._id === orderName )
          
            if (order !== undefined) {
                dispatch(openOrder(order))
            }  
        }
        
    }, [ingridients, orders, profileOrders]);

  

    return (
        <>
            {background && (
                <Routes>
                    <Route
                        path='/ingredients/:ingredientId'
                        element={
                            <Modal 
                                title={'Детали ингредиента'}
                                active={openIngredient}
                                onClose={handleCloseModal}
                            >
                                <IngredientDetails clikIngridients={ingredient}/>
                            </Modal>
                        }
                    />
                     <Route
                        path='feed/:id'
                        element={
                            <Modal 
                                title={'#'+ String(orderName.number)}
                                active={openOrderBool}
                                onClose={handleCloseModalOrder}
                            >
                                <FeedPage />
                            </Modal>
                        }
                    />
                    <Route
                        path='/profile/orders/:id'
                        element={
                            <Modal 
                                title={'#'+ String(orderName.number)}
                                active={openOrderBool}
                                onClose={handleCloseModalOrder}
                            >
                                <FeedPage />
                            </Modal>
                        }
                    />
                </Routes>
            )}
        </>
    );
};


export default ModalSwitch;