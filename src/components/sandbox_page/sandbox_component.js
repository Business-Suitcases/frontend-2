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




// import React, { useEffect, useState } from 'react';
// import './sandbox_component.css'

// function TaskList({subject}) {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);


//   function formatDate(dateString) {
//     const date = new Date(dateString);
//     const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
//     const dayOfWeek = daysOfWeek[date.getDay()];
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     return `${dayOfWeek} ${day}.${month}`;
//   }

//   useEffect(() => {
//     // Функция для получения задач из API
//     const fetchTasks = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`https://anatoliy_ne_prav.loyalpelmen.ru/tasks/by_lesson?lesson=%D0%A4%D0%B8%D0%BB%D0%BE%D1%81%D0%BE%D1%84%D0%B8%D1%8F`);
//         const data = await response.json();
        
//         setTasks(data);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, [subject]);

//   if (loading) {
//     return <p>Загрузка задач...</p>;
//   }

//   return (
//     <div>
//       <h1>{subject}</h1>
//       <ul>
//         {tasks.map(task => (
//           <li key={task.Task.id} className='listElement'>
//             <input type="checkbox" defaultChecked={false} />
//             <span>{task.Task.name}  </span>
//             <br />
//             <small>{formatDate(task.Task.deadline)}  </small>
//             <small className={task.Task.type}>{task.Task.type}</small>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TaskList;

