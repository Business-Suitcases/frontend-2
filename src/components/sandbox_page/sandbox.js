// import './sandbox.css';
// import React, { useState } from 'react';
// import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import InnerModal from './InnerModal';



// const Sandbox = () => {
    

//     const handleLogOut = () => {
//         localStorage.removeItem('isAuthenticated')
//     }


//     return(
//         <div>
//             <button onClick={handleLogOut}>LOG OUT</button>
//         </div>
//     )

// }

// export default Sandbox;


// Сверху функция кнопки для выхода из профиля


// TaskList.js
import React, { useEffect, useState } from 'react';
import TaskList from './sandbox_component';

function RenderThat() {

    const [subject, setSubject] = useState('Философия');
    

    return(
        <TaskList subject={subject}/>
    )
}

export default RenderThat;
