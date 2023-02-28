import React from "react";
import './ModalOverlay.css'
import PropTypes from 'prop-types';

const ModalOverlay = ({
    active,
    onClose,
    children
}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={onClose}>
            {children}
        </div>
    );
}

ModalOverlay.propTypes = {
    active:  PropTypes.bool,
    children:  PropTypes.element,
    onClose:  PropTypes.func.isRequired   
  }; 

export default ModalOverlay;