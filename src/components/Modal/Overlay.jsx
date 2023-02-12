import React from 'react';
import './Overlay.css'

const ModalOverlay = ({
    active,
    setActive,
}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)} >
            
        </div>
    );
}

export default ModalOverlay;
