import React from 'react';
import style from './OrderDetails.module.css'
import { CloseIcon, CheckMarkIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const OrderDetails = (
    handleClick
) => {
    return (
        <>
            <section className={style.icons}>
                <section className="mt-15 mr-10" >
                    <CloseIcon onClick={() => handleClick()} type="primary" />
                </section>
            </section>
            <section className={style.content}>
                <section className='mt-9'>
                    <p className="text text_type_digits-large">034536</p>
                </section>
            </section>
            <section className={style.content}>
                <section className='mt-8'>
                    <p className="text text_type_main-medium">
                        индефикатор заказа
                    </p>
                </section>
            </section>
            <section className={style.content}>
                <section className='mt-15'>
                    <section className={style.content}>
                        <section className={style.box}>
                            <CheckMarkIcon type="primary" />
                        </section>
                    </section>
                </section>
            </section>
            <section className={style.content}>
                <section className="mt-15">
                    <p className="text text_type_main-duefalt">
                        Ваш заказ начали готовить
                    </p>
                </section>
            </section>
            <section className={style.content_text}>
                <section className="mt-2">
                    <p className="text text_type_main-duefalt">
                        Дождитесь готовности на орбитальной станции
                    </p>
                </section>
            </section>
            <div className='mt-30'>

            </div>
        </>
    );
}

export default OrderDetails;
