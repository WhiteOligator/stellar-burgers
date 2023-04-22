import React from 'react';
import style from './OrderDetails.module.css'
import { CloseIcon, CheckMarkIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { ProgressBar } from 'react-loader-spinner'
import { getIsPost, getOrder } from '../../redux/selectors/selectors';
import { useAppSelector } from '../../hooks/hooks';

const OrderDetails = () => {
    const order = useAppSelector(getOrder)
    const isPost = useAppSelector(getIsPost)

    return (
        <>
        {isPost  ?
            <div className={style.NotOrder}>
                <p className="text text_type_main-medium">
                        Ожидайте!!!
                </p>
                <p className="text text_type_main-medium">
                        Ваш заказ генерируется на орбитальной станции
                </p>
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
             
        :
        <section>
            <div className={style.content}>
                <div className='mt-9'>
                    <p className="text text_type_digits-large">{order}</p>
                </div>
            </div>
            <div className={style.content}>
                <div className='mt-8'>
                    <p className="text text_type_main-medium">
                        индефикатор заказа
                    </p>
                </div>
            </div>
            <div className={style.content}>
                <div className='mt-15'>
                    <div className={style.content}>
                        <div className={style.box}>
                            <CheckMarkIcon type="primary" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.content}>
                <div className="mt-15">
                    <p className="text text_type_main-duefalt">
                        Ваш заказ начали готовить
                    </p>
                </div>
            </div>
            <div className={style.content_text}>
                <div className="mt-2">
                    <p className="text text_type_main-duefalt">
                        Дождитесь готовности на орбитальной станции
                    </p>
                </div>
                
            </div>
            <div className='mt-30'></div>
        </section>


        }
       </>
    );
}

export default OrderDetails;
