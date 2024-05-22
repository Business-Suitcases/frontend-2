import React, { useEffect, useState } from 'react';
import './taskList.css'

function TaskList({subject, forceRender, triggerRender}) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);


  function formatDate(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${dayOfWeek} ${day}.${month}`;
  }

  async function deleteTask(taskId){
    const response = await fetch(`https://anatoliy_ne_prav.loyalpelmen.ru/tasks?task_id=${taskId}`, {
        method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok){
        triggerRender();
    }
  }

  useEffect(() => {
    // Функция для получения задач из API
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://anatoliy_ne_prav.loyalpelmen.ru/tasks/by_lesson?lesson=${encodeURI(subject)}`);
        const data = await response.json();
        
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [subject, forceRender]); //Дабавляем forceRender в зависимости fetchTasks для обновления компонента.

  if (loading) {
    return <p>Загрузка задач...</p>;
  }

  return (
    <div>
      <h1>{}</h1>
      <div className='overFlow'>
      <ul>
        {tasks.map(task => (
          <li key={task.Task.id} className='listElement'>
            <input type="checkbox" defaultChecked={false} className='inputCheckbox' onChange={() => deleteTask(task.Task.id)}/>
            <span className='name'>{task.Task.name}  </span>
            <br />
            <div className='deadlineDiv'><small className='deadline'>{formatDate(task.Task.deadline)}  </small></div>
            <small className={task.Task.type}>{task.Task.type}</small>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default TaskList;

