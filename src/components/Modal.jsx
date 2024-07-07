import React from 'react';
import './Modal.css';

const Modal = ({ show, image, onClose }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content">
                <img src={image} alt="Zoomed" />
            </div>
        </div>
    );
};

export default Modal;
