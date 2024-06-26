import React from 'react';
import './profileModal.css';

function Modal({ onClose, theme }) {

  const handleLogOut = () => {
             localStorage.removeItem('isAuthenticated');
             window.location.reload();
    }


    

    
  return (
        <div className=''>
        <div className={`buttonsDiv${theme}`}>
          <button className='editButton'>Редактировать</button>
          <br/>
          <button className='exitButton' onClick={handleLogOut}>Выйти</button>
          </div>
        </div>
  );
}
  
export default Modal;