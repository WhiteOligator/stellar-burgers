import { Router, Route, Routes, useLocation, Switch } from 'react-router-dom';
import { getUserThunk } from '../../redux/thunk/userThunk';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import IngredientDetailsPage from '../../pages/IngredientDetailsPage/IngredientDetailsPage';
import { GetCookie } from '../../hooks/Cookie';
import AppHeader from '../AppHeader/AppHeader';
import style from './App.module.css'
import Authorization from '../../pages/authorization/authorization';
import ForgotPassword from '../../pages/forgotPassword/forgotPassword';
import Home from '../../pages/home/home';
import Registration from '../../pages/registration/registration';
import Passwordreset from '../../pages/passwordReset/passwordReset';
import Profile from '../../pages/profile/profile';
import ProfileOrders from '../../pages/profileOrders/profileOrders';
import NotFound404 from '../../pages/notFound404/NotFound404';
import ModalSwitch from '../../pages/ModalSwitch';
import { ProtectedRoute } from '../../pages/ProtectedRoute/ProtectedRoute';
import { getIngridients } from '../../redux/thunk/getIngridients';




function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getIngridients())
    if (GetCookie('accessToken')) {
      dispatch(getUserThunk())
    }
  }, []);

  const location = useLocation();
  let background = location.state && location.state.background ? true : false;

  return (
   <div className={style.content}> 
      <AppHeader />
      <Routes location={background || location}>
        <Route element={<Home />} path="/"/>
        <Route
            exact
            path='/ingredients/:ingredientId'
            element={<IngredientDetailsPage />}
        />
        <Route element={<ProtectedRoute autorizeStatus={true} element={<Authorization />} />} path="/login"/>
        <Route element={<ProtectedRoute autorizeStatus={true} element={<Registration />} />} path="/register"/>
        <Route element={<ProtectedRoute autorizeStatus={true} element={<ForgotPassword />} />} path="/forgot-password"/>
        <Route element={<ProtectedRoute autorizeStatus={true} element={<Passwordreset />} name = {true} />} path="/reset-password"/>
        <Route element={<ProtectedRoute autorizeStatus={false} element={<Profile />} />} path="/profile"/>
        <Route element={<ProtectedRoute autorizeStatus={false} element={<ProfileOrders />} />} path="/profile/orders"/>
        <Route path='*' element={<NotFound404 />} />
      </Routes>
      <ModalSwitch background={background} />
    </div>
  );
}

export default App;
