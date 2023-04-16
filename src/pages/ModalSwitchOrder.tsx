
import { Route, useNavigate, Routes, useLocation } from 'react-router-dom';
import Modal from '../components/Modal/Modal'
import { get_open_order, get_open_order_order, get_orders } from '../redux/selectors/selectors';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { ElementOrders, TIngredientItem } from '../utils/TypesAndIntareface';
import { deleteOrder, openOrderModal } from '../redux/actionCreators/ActionOrder';
import { FeedPage } from './feedsPage/feedPage/feedPage';
import { openOrder } from '../redux/actionCreators/ActionOrder'

type backgroundType = {
    background: null | object
}

const ModalSwitchOrder = ({ background }: backgroundType) => {
    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useAppDispatch();
    const orders = useAppSelector(get_orders)
    const {openOrderBool, order} = useAppSelector(get_open_order)

    const orderName = useAppSelector(get_open_order_order);

    const handleCloseModal = () => {
        dispatch(openOrderModal(true))
        dispatch(deleteOrder());
        navigate(-1);
    }

    useEffect(() => {
        const local = location.pathname
        
        if (local.indexOf('feed') === 1 && order) {
            const orderName = local.slice(6)
            const order = orders.find((el: ElementOrders) => el._id === orderName )
          
            if (order !== undefined) {
                dispatch(openOrder(order))
            }  
        }
        
    }, [orders]);

  

    return (
        <>
            {background && (
                <Routes>
                    <Route
                        path='/feed/:id'
                        element={
                            <Modal 
                                title={'#'+ String(orderName.number)}
                                active={openOrderBool}
                                onClose={handleCloseModal}
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


export default ModalSwitchOrder;