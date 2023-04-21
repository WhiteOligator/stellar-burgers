import React, { FC, useEffect } from "react";
import { ProgressBar } from "react-loader-spinner";
import FeedCard from "../../components/feedCard/feedCard";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../redux/actionType/middlewareActions";
import { getAllOrders } from "../../redux/selectors/selectors";
import { RootState } from "../../redux/store";
import { ElementOrders, TIngredientItem } from "../../utils/TypesAndIntareface";
import style from "./feedsPage.module.css";

const FeedsPage: FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START, payload: '' });

        return () => {
            dispatch({type: WS_CONNECTION_CLOSED})
        }
        
    }, [dispatch])
    
    const {wsConnected, messages} = useAppSelector(getAllOrders)
   
    let done = messages.orders.filter((el) => el.status === "done" )
    let inwork = messages.orders.filter((el) => el.status === "created" )

    return (
        <div className={style.content}>
            {wsConnected && messages.orders ? 
            <>
            <div className={style.text}>
                    <p className="text text_type_main-large ml-4">
                        Лента заказов
                    </p>
            </div>
            <div className={style.FeedsIngredients}>
                <div className={style.FeedsIngredientsContainer}>
                    {messages.orders.map((el) => 
                        <FeedCard 
                            key={el._id}
                            id={el._id}
                            ingredients={el.ingredients}
                            name={el.name}
                            createdAt={el.createdAt}
                            number={el.number}
                            order={el}
                        />
                    )}
                </div>
            </div>
            <div className={style.order}>
                <div className={style.success}>
                    <p className="text text_type_main-medium mb-6">
                        Готовы:
                    </p>
                    <div className={style.numbers}>
                        {done.slice(0, 10).map((el) => 
                            <p key={el._id} className="text text_type_digits-default" style={{color: '#00CCCC'}}>{el.number}</p>
                        )}
                    </div>
                </div>
                <div className={style.inwork}>
                    <p className="text text_type_main-medium mb-6">
                        В работе:
                    </p>
                    <div className={style.numbers}>
                        {inwork.slice(0, 10).map((el) => 
                                <p key={el._id} className="text text_type_digits-default" style={{color: '#00CCCC'}}>{el.number}</p>
                            )}
                    </div>
                </div>
                <div className={style.successGotIt}>
                    <div className={style.gotIt}>
                        <p className="text text_type_main-medium">
                            Выполнено за все время:
                        </p>
                    </div>
                    <div className={style.gotIt2}>
                        <p className={`${style.shadow} text text_type_digits-large`} >{messages.total}</p>
                    </div>
                </div>
                <div className={style.successGotIt}>
                    <div className={style.gotIt}>
                        <p className="text text_type_main-medium">
                            Выполнено за сегодня:
                        </p>
                    </div>
                    <div className={style.gotIt2}>
                        <p className={`${style.shadow} text text_type_digits-large`} >{messages.totalToday}</p>
                    </div>
                </div>
            </div></>
            :
            <div className={style.loading}>
                <ProgressBar 
                    height="140"
                    width="140"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass="progress-bar-wrapper"
                    barColor = '#8B00FF'
                    borderColor = '#51E5FF'
                />   
            </div>
            }
        </div>
    );

}

export default FeedsPage;
