// import React from 'react';
// import './tgBtnModal.css'

// const Modal = ({ show, handleClose, children }) => {
//   const showModal = show ? "display-block" : "display-none";

//   return (
//     <div className={`modal ${showModal}`}>
//       <section className="modal-main">
//         {children}
//         <button onClick={handleClose}>Закрыть</button>
//       </section>
//     </div>
//   );
// };

// export default Modal;

import React from 'react';

const Modal = ({ show, handleClose, children }) => {
  const showModal = show ? "display-block" : "display-none";
  

  return (
    <div className={`modal ${showModal}`}>
      <section className="modal-main">
        {children}
        {/* <button onClick={handleClose}>Закрыть</button> */}
      </section>
    </div>
  );
};

export default Modal;

// CSS стили
const styles = `
.modal {
  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0);
  display: flex;
 
}

.display-block {
  display: flex;
}

.display-none {
  display: none;
}

.modal-main {
  position: relative;
  padding: 20px;
  width: 200px;
  height: 40px;
  background: #E6E6E6;
  border-radius: 10px;
  border-width: 3px;
  border-color: black;
  left: -90px;
  top: 130px;
}
`;

// Добавьте стили в HTML документ
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
