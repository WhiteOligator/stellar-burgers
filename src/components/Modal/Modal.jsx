import React, {useEffect} from "react";
import './Modal.css'
import PropTypes from 'prop-types';
import style from './Modal.module.css'
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { createPortal } from 'react-dom';
import ModalOverlay from "./ModalOverlay";
import { useDispatch, useSelector } from "react-redux";
import { deleteIngridientThunk } from "../../redux/thunk/openIngridients";
import { cleareOrderThunk } from "../../redux/thunk/order";


const portal = document.getElementById("portal");

const Modal = ({
    title = null,
    active,
    onClose,
    children
}) => {

    const dispatch = useDispatch();
   
    
    useEffect(() => {
        function handleEscapeKey(event) {
            if (event.code === 'Escape') 
                dispatch(deleteIngridientThunk())
                dispatch(cleareOrderThunk())
       
          }
        
        document.addEventListener('keydown', handleEscapeKey)
        return () => document.removeEventListener('keydown', handleEscapeKey)
    },[])
  
    return createPortal( 
            <ModalOverlay active={active} onClose={() => { dispatch(deleteIngridientThunk());  dispatch(cleareOrderThunk())}}>
                <div className={active ? "content active" : "content"} onClick={e => e.stopPropagation()}>               
                    <header className='ml-10 mt-10'  >
                        <div className={style.box}>
                            <div className={style.text}>
                                <p className="text text_type_main-large">
                                    {title}
                                </p>
                            </div>
                            <div onClick={() => { dispatch(deleteIngridientThunk());  dispatch(cleareOrderThunk())}} className={style.icons}>
                                <CloseIcon  type="primary" />
                            </div>
                        </div>            
                    </header>
                    {children}
                </div>
            </ModalOverlay>, portal);

    }                
Modal.propTypes = {
    active:  PropTypes.bool,
    setActive: PropTypes.func,
    children:  PropTypes.element,  
  }; 
 
export default Modal;