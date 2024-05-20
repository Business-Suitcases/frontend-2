import React from 'react';
import './pickerModal.css';

function Modal({ onClose, children }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="tag-modal-content" onClick={(e) => e.stopPropagation()}>
        {children }
      </div>
    </div>
  );
}

export default Modal;