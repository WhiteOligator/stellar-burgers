import { Router, Route, Routes, useLocation, Switch } from 'react-router-dom';
import Authorization from './pages/authorization/authorization';
import Home from './pages/home/home';
import ForgotPassword from './pages/forgotPassword/forgotPassword';
import Passwordreset from './pages/passwordReset/passwordReset';
import Profile from './pages/profile/profile';
import ProfileOrders from './pages/profileOrders/profileOrders';
import Registration from './pages/registration/registration';
import { getUserThunk } from '../../redux/thunk/userThunk';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import {ProtectedRoute} from './pages/ProtectedRoute/ProtectedRoute'
import { isLog } from '../../redux/selectors/selectors';
import NotFound404 from './pages/notFound404/NotFound404';
import IngredientDetailsPage from './pages/IngredientDetailsPage/IngredientDetailsPage';
import ModalSwitch from './pages/ModalSwitch';
import { GetCookie } from '../../hooks/Cookie';





function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    if (GetCookie('accessToken')) {
      dispatch(getUserThunk())
    }
  }, []);

  const location = useLocation();
  let background = location.state && location.state.background ? true : false;

  return (
   <>
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
    </>
  );
}

export default App;
