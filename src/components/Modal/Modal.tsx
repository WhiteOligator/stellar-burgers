import React, {useEffect, FC} from "react";
import './Modal.css'
import style from './Modal.module.css'
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { createPortal } from 'react-dom';
import ModalOverlay from "./ModalOverlay";
import {ModalProps} from '../../utils/TypesAndIntareface'

const portal: HTMLElement = document.getElementById("portal")!;

const Modal: FC<ModalProps>  = ({
    title,
    active,
    onClose,
    children,
}) => {

   
   
    
    useEffect(() => {
        function handleEscapeKey(event: KeyboardEvent) {
            if (event.code === 'Escape' && onClose !== undefined) {
                onClose()
            }
               
       
          }
        
        document.addEventListener('keydown', handleEscapeKey)
        return () => document.removeEventListener('keydown', handleEscapeKey)
    },[])

   
  
    return createPortal( 
            <ModalOverlay active={active} onClose={onClose}>
                <div className={active ? "content active" : "content"} onClick={e => e.stopPropagation()}>               
                    <header className='ml-10 mt-10'  >
                        <div className={style.box}>
                            <div className={style.text}>
                                <p className="text text_type_main-large">
                                    {title}
                                </p>
                            </div>
                            <div onClick={onClose} className={style.icons}>
                                <CloseIcon  type="primary" />
                            </div>
                        </div>            
                    </header>
                    {children}
                </div>
            </ModalOverlay>, portal);

    }                
 
export default Modal;