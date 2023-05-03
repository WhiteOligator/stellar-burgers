import {FC} from 'react'
import { useEffect } from "react"
import { GetCookie } from '../../hooks/Cookie';
import { useAppDispatch } from "../../hooks/hooks";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../redux/actionType/middlewareActions";
import { WS_PROFILE_CONNECTION_CLOSED, WS_PROFILE_CONNECTION_START } from '../../redux/actionType/middlewareProfileOrder';
import { wsProfileReducer } from "../../redux/reducers/MiddlewareProfileReducer/middlewareProfileReducer"
import { FeedPage } from "../feedsPage/feedPage/feedPage"


const WsFeedPage = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        let token ='?token=' + GetCookie('accessToken')?.trim()

        dispatch({ type: WS_PROFILE_CONNECTION_START, payload: token });

        return () => {
            dispatch({type: WS_PROFILE_CONNECTION_CLOSED})
        }
        
    }, [dispatch])

    return <FeedPage />
}

export default WsFeedPage