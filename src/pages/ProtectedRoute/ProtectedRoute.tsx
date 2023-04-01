import { useSelector } from 'react-redux';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { GetCookie } from '../../hooks/Cookie';
import React, {FC} from 'react'
import {useAppSelector} from '../../hooks/hooks'
import { forgotPassword } from '../../redux/selectors/selectors';

interface ProtectedRouteProps {
    autorizeStatus?: boolean;
    element: React.ReactNode;
    name?: boolean;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ autorizeStatus, element, name = false }) => {
    const isLoggedIn = GetCookie('accessToken')
    const forgot = useAppSelector(forgotPassword)
    
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

    return <>{element}</>;
}