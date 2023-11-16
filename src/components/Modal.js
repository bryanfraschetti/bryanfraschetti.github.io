import React from 'react';
import './Modal.css';

const Modal = ({ id, onClose, children }) => {
  return (
    <div id={id} className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose} style={{color: "black"}}>
        &times;
        </span>
        {children}
    </div>
    </div>
  );
};

export default Modal;