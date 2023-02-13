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
    title = null,
    active,
    setActive,
    children
}) => 
     
       
        createPortal( 
        <>  
            <EscClose setActive={setActive} />
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className={active ? "content active" : "content"} onClick={e => e.stopPropagation()}>               
                    <header className='ml-10 mt-10'  >
                        <div className={style.box}>
                            <div className={style.text}>
                                <p className="text text_type_main-large">
                                    {title}
                                </p>
                            </div>
                            <div onClick={() => setActive(false)} className={style.icons}>
                                <CloseIcon  type="primary" />
                            </div>
                        </div>            
                    </header>
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