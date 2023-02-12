import React, {useEffect} from "react";
import './Modal.css'
import PropTypes from 'prop-types';
import style from './Modal.module.css'
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { createPortal } from 'react-dom';

const portal = document.getElementById("portal");

const EscClose = ({setActive}) => {
   

    useEffect(() => {
        function handleEscapeKey(event) {
            if (event.code === 'Escape') 
                setActive(false);
       
          }
        
        document.addEventListener('keydown', handleEscapeKey)
        return () => document.removeEventListener('keydown', handleEscapeKey)
    },[])
}

const Modal = ({
    active,
    setActive,
    children = <></>,
    number
}) => 
     
       
        createPortal( 
        <>  
            <EscClose setActive={setActive} />
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className={active ? "content active" : "content"} onClick={e => e.stopPropagation()}>

                    {number === 1 ?
                    <section className={style.icons1}>
                        <section className="mt-15 mr-10" >
                            <CloseIcon onClick={() => setActive(false)} type="primary" />
                        </section>
                    </section>

                    : 
                    
                    <div className='ml-10 mt-10'  >
                        <section className={style.box}>
                            <section className={style.text}>
                                <p className="text text_type_main-large">
                                    Детали заказа
                                </p>
                            </section>
                            <section onClick={() => setActive(false)} className={style.icons}>
                                <CloseIcon  type="primary" />
                            </section>
                        </section>            
                    </div>

                    }
                    {children}
                        
                    
                </div>
            </div>
            
        </>, portal);

                
Modal.propTypes = {
    active:  PropTypes.bool,
    setActive: PropTypes.func,
    children:  PropTypes.element,  
  }; 
 
export default Modal;