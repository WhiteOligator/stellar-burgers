import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authorization from './pages/authorization/authorization';
import Home from './pages/home/home';
import ForgotPassword from './pages/forgotPassword/forgotPassword';
import Passwordreset from './pages/passwordReset/passwordReset';
import Profile from './pages/profile/profile';
import ProfileOrders from './pages/profileOrders/profileOrders';
import Registration from './pages/registration/registration';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/"/>
        <Route element={<Authorization />} path="/login"/>
        <Route element={<Registration />} path="/register"/>
        <Route element={<ForgotPassword />} path="/forgot-password"/>
        <Route element={<Passwordreset />} path="/reset-password"/>
        <Route element={<Profile />} path="/profile"/>
        <Route element={<ProfileOrders />} path="/profile/orders"/>
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
