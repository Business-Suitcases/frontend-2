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


import DropdownMenu from './sandbox_component.js';

const Sandbox = () => {    
    
        return(
            <div>   
                <DropdownMenu testValue={'Вася ты еблан'}></DropdownMenu>
            </div>
        )
    
    }
    
    export default Sandbox;
    
