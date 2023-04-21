import {FC} from 'react'
import { useEffect } from "react"
import { GetCookie } from '../../hooks/Cookie';
import { useAppDispatch } from "../../hooks/hooks";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../redux/actionType/middlewareActions";
import { wsProfileReducer } from "../../redux/reducers/middlewareProfileReducer"
import { FeedPage } from "../feedsPage/feedPage/feedPage"


const WsOrderPage = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        

        dispatch({ type: WS_CONNECTION_START, payload: '' });

        return () => {
            dispatch({type: WS_CONNECTION_CLOSED})
        }
        
    }, [dispatch])

    return <FeedPage />
}

export default WsOrderPage