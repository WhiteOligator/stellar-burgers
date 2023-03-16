import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useNavigate, Routes, useLocation } from 'react-router-dom';
import { deleteIngridientThunk, openIngridientThunk }from '../redux/thunk/openIngridients'
import Modal from '../components/Modal/Modal'
import IngredientDetails from '../components/IngredientDetails/IngredientDetails';
import { getClikIngridients, ingridientsSelector, openItem } from '../redux/selectors/selectors';
import { useEffect } from 'react';



const ModalSwitch = ({ background }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const {ingridients} = useSelector(ingridientsSelector)

    const dispatch = useDispatch();
    const openIngredient = useSelector(openItem)
    const clikIngridients = useSelector(getClikIngridients)

    const handleCloseModal = () => {
        dispatch(deleteIngridientThunk());
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
                                <IngredientDetails clikIngridients={clikIngridients}/>
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