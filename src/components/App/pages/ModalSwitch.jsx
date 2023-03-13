import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Route, useNavigate, Routes } from 'react-router-dom';
import { deleteIngridientThunk }from '../../../redux/thunk/openIngridients'
import Modal from '../../Modal/Modal'
import IngredientDetails from '../../IngredientDetails/IngredientDetails';



const ModalSwitch = ({ background }) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(deleteIngridientThunk());
        navigate(-1);
    }

    return (
        <>
            {background && (
                <Routes>
                    <Route
                        path='/ingredients/:ingredientId'
                        element={
                            <Modal onClose={handleCloseModal}>
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