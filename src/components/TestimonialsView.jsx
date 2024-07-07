import React from 'react';
import './TestimonialsView.css';

const TestimonialsView = ({ show, image, onClose }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content">
                <img src={image} alt="Zoomed" />
            </div>
        </div>
    );
};

export default TestimonialsView;
