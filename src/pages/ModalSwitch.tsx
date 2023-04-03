import { Route, useNavigate, Routes, useLocation } from 'react-router-dom';
import { deleteIngridientThunk, openIngridientThunk }from '../redux/thunk/openIngridients'
import Modal from '../components/Modal/Modal'
import IngredientDetails from '../components/IngredientDetails/IngredientDetails';
import { getClikIngridients, ingridientsSelector, openItem } from '../redux/selectors/selectors';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { TIngredientItem } from '../utils/TypesAndIntareface';

type backgroundType = {
    background: null | object
}

const ModalSwitch = ({ background }: backgroundType) => {
    const navigate = useNavigate();
    const location = useLocation();

    const {ingridients} = useAppSelector(ingridientsSelector)

    const dispatch = useAppDispatch();
    const openIngredient = useAppSelector(openItem)
    const clikIngridients: TIngredientItem = useAppSelector(getClikIngridients)

    const handleCloseModal = () => {
        dispatch(deleteIngridientThunk());
        navigate(-1);
    }

    useEffect(() => {
        const local = location.pathname
        if (local.indexOf('ingredients') === 1 && ingridients) {
            const ingredientName = local.slice(13)
            const ingredient = ingridients.find((el: TIngredientItem) => el._id === ingredientName )
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


export default ModalSwitch;