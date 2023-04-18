import { Router, Route, Routes, useLocation } from 'react-router-dom';
import { getUserThunk } from '../../redux/thunk/userThunk';
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
import React, {FC} from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import FeedsPage from '../../pages/feedsPage/feedsPage';
import { FeedPage } from '../../pages/feedsPage/feedPage/feedPage';
import { WS_CONNECTION_START } from '../../redux/actionType/middlewareActions';
import { WS_PROFILE_CONNECTION_START } from '../../redux/actionType/middlewareProfileOrder';



const App: FC = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getIngridients())
    dispatch({ type: WS_CONNECTION_START });
    if (GetCookie('accessToken')) {
      dispatch(getUserThunk())
      dispatch({ type: WS_PROFILE_CONNECTION_START })
    }
  }, []);

  const location = useLocation();
  let background: null | object = location.state && location.state.background;

 
  return (
   <div className={style.content}> 
      <AppHeader />
      <Routes location={background || location}>
        <Route element={<Home />} path="/"/>
        <Route
            path='/ingredients/:ingredientId'
            element={<IngredientDetailsPage />}
        />
        <Route
            path='/feed'
            element={<FeedsPage />}
        />
        <Route
            path='/feed/:id'
            element={<FeedPage />}
        />
        <Route element={<ProtectedRoute  autorizeStatus={true} element={<Authorization />} />} path="/login"/>
        <Route element={<ProtectedRoute autorizeStatus={true} element={<Registration />} />} path="/register"/>
        <Route element={<ProtectedRoute autorizeStatus={true} element={<ForgotPassword />} />} path="/forgot-password"/>
        <Route element={<ProtectedRoute autorizeStatus={true} element={<Passwordreset />} name = {true} />} path="/reset-password"/>
        <Route element={<ProtectedRoute autorizeStatus={false} element={<Profile />} />} path="/profile"/>
        <Route element={<ProtectedRoute autorizeStatus={false} element={<ProfileOrders />} />} path="/profile/orders"/>
        <Route element={<ProtectedRoute autorizeStatus={false} element={<FeedPage />} />} path="/profile/orders/:id"/>
        <Route path='*' element={<NotFound404 />} />
      </Routes>
      <ModalSwitch background={background} />
      
    </div>
  );
}

export default App;
