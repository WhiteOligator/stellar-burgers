import React, { FC } from "react";
import FeedCard from "../../components/feedCard/feedCard";
import style from "./feedsPage.module.css";

const FeedsPage: FC = () => {


    return (
        <div className={style.content}>
            <div className={style.text}>
                    <p className="text text_type_main-large ml-4">
                        Лента заказов
                    </p>
            </div>
            <div className={style.FeedsIngredients}>
                <div className={style.FeedsIngredientsContainer}>
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                </div>
            </div>
            <div className={style.order}>
                <div className={style.success}>
                    <p className="text text_type_main-medium mb-6">
                        Готовы:
                    </p>
                    <div className={style.numbers}>
                        <p className="text text_type_digits-default" style={{color: '#00CCCC'}}>034533</p>
                        <p className="text text_type_digits-default" style={{color: '#00CCCC'}}>034533</p>
                        <p className="text text_type_digits-default" style={{color: '#00CCCC'}}>034533</p>
                        <p className="text text_type_digits-default" style={{color: '#00CCCC'}}>034533</p>
                        <p className="text text_type_digits-default" style={{color: '#00CCCC'}}>034533</p>
                        <p className="text text_type_digits-default" style={{color: '#00CCCC'}}>034533</p>
                    </div>
                </div>
                <div className={style.inwork}>
                    <p className="text text_type_main-medium mb-6">
                        В работе:
                    </p>
                    <div className={style.numbers}>
                        <p className="text text_type_digits-default">034533</p>
                        <p className="text text_type_digits-default">034533</p>
                        <p className="text text_type_digits-default">034533</p>
                    </div>
                </div>
                <div className={style.successGotIt}>
                    <div className={style.gotIt}>
                        <p className="text text_type_main-medium">
                            Выполнено за все время:
                        </p>
                    </div>
                    <div className={style.gotIt2}>
                        <p className={`${style.shadow} text text_type_digits-large`} >28 725</p>
                    </div>
                </div>
                <div className={style.successGotIt}>
                    <div className={style.gotIt}>
                        <p className="text text_type_main-medium">
                            Выполнено за сегодня:
                        </p>
                    </div>
                    <div className={style.gotIt2}>
                        <p className={`${style.shadow} text text_type_digits-large`} >138</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default FeedsPage;
