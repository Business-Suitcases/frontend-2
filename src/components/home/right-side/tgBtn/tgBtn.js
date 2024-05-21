// import React, { useState } from 'react';
// import { FaTelegramPlane } from 'react-icons/fa';
// import Modal from './tgBtnModal'; // Импорт модального окна

// const TelegramButton = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [inputValue, setInputValue] = useState('');

//   const handleOpenModal = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <div>
//       <button onClick={handleOpenModal} className='button'>
//         <FaTelegramPlane className='icon' />
//       </button>
//       <Modal show={showModal} handleClose={handleCloseModal}>
//         <h2>Ссылка</h2>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Введите ссылку"
//           className='input'
//         />
//       </Modal>
//     </div>
//   );
// };



// export default TelegramButton;

import React, { useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import Modal from './tgBtnModal'; // Импорт модального окна
import { BsDisplay } from 'react-icons/bs';
import './tgBtn.css';
import { fontFamily, positions } from '@mui/system';

const TelegramButton = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleKeyDown = (e) =>{ //Эта функция проверяет, какая кнопка была нажата, и если это энтер, то закрывает модальное окно
    if (e.key === "Enter") {
        props.setLink(inputValue);
        handleCloseModal();
      }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <button onClick={handleOpenModal} style={buttonStyle}>
        <FaTelegramPlane style={iconStyle} />
      </button>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <label style={labelStyle}>Ссылка</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Введите ссылку"
          style={inputStyle}
        />
      </Modal>
    </div>
  );
};

// Стили для кнопки
const buttonStyle = {
  backgroundColor: '#fff',
  color: '#000',
  border: '1px solid #000',
  padding: '10px',
  borderRadius: '5px',
  cursor: 'pointer',
  width: '70px',
  height: '38px',
  background: '#E6E6E6'
};

// Стили для иконки
const iconStyle = {
  fontSize: '20px'
};

// Стили для инпута
const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  width: '200px',
  border: '1px solid #ccc',
  position: 'absolute',
    top: '30px',
    left: '10px'

};

const labelStyle = {
    fontFamily: 'Roboto',
    fontSize: '18px',
    position: 'absolute',
    top: '2px',
    left: '80px'
}

export default TelegramButton;

