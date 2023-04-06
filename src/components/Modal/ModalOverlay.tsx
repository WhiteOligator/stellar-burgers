import React, {FC} from "react";
import './ModalOverlay.css'
import PropTypes from 'prop-types';
import { ModalOverlayProps } from "../../utils/TypesAndIntareface";

const ModalOverlay: FC<ModalOverlayProps> = ({
    active,
    onClose,
    children,
}) => {

 
    return (
        <div className={active ? "modal active" : "modal"} onClick={onClose}>
            {children}
        </div>
    );
}


export default ModalOverlay;