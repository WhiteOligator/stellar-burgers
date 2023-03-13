import { useSelector } from 'react-redux';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { GetCookie } from '../../../../hooks/Cookie';


export const ProtectedRoute = ({ autorizeStatus, element, name = false }) => {
    const isLoggedIn = GetCookie('accessToken')
    const forgot = useSelector(state => state.user.forgotPassword)
    
    const location = useLocation();
    const from = location.state?.from || '/';

    if (!forgot && name) {
        return <Navigate to='/forgot-password' />
    }

    if (autorizeStatus && isLoggedIn) {
        return <Navigate to={ from } />
    }

    if (!autorizeStatus && !isLoggedIn) {
        return <Navigate to='/login' state={{ from: location }} />
    }

    return element;
}