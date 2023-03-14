import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useNavigate, Routes, useLocation } from 'react-router-dom';
import { deleteIngridientThunk, openIngridientThunk }from '../../../redux/thunk/openIngridients'
import Modal from '../../Modal/Modal'
import IngredientDetails from '../../IngredientDetails/IngredientDetails';
import { cleareOrderThunk } from '../../../redux/thunk/order';
import { ingridientsSelector, openItem } from '../../../redux/selectors/selectors';
import { useEffect } from 'react';



const ModalSwitch = ({ background }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const {ingridients} = useSelector(ingridientsSelector)

    const dispatch = useDispatch();
    const openIngredient = useSelector(openItem)

    const handleCloseModal = () => {
        dispatch(deleteIngridientThunk());
        dispatch(cleareOrderThunk())
        navigate(-1);
    }

    useEffect(() => {
        const local = location.pathname
        if (local.indexOf('ingredients') === 1 && ingridients) {
            const ingredientName = local.slice(13)
            const ingredient = ingridients.find(el => el._id === ingredientName )
            dispatch(openIngridientThunk(ingredient))
        }
        
    }, [ingridients]);


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
                                <IngredientDetails />
                            </Modal>
                        }
                    />
                </Routes>
            )}
        </>
    );
};

ModalSwitch.propTypes = {
    background: PropTypes.bool.isRequired
};

export default ModalSwitch;