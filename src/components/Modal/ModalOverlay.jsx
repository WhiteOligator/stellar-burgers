import React from "react";
import './ModalOverlay.css'


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

export default ModalOverlay;