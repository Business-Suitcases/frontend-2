import React, { useState } from 'react';
import './okno.css';
import TagPick from './tag-picker/TagPick';
import TelegramButton from './tgBtn/tgBtn.js';
import SubjectPick from './subject-picker/SubjectPick.js';

import MyDatePicker from './datePicker/myDatePicker.js';
 //Придает дейтпикеру человеческий более-менее вид


const ModalComponent = (props) => {

  const [selectedTitle, setTitle] = useState('');

  const handleSetTitle = (event) => {
      setTitle(event.target.value);
  }

 const [selectedTag, setSelectedTag] = useState('Домашнее задание'); //Хук-юк, здесь будет хранится переменная, указыввающая на то, какой тэг был выбран


 const [selectedLink, setLink] = useState('');


const [selectedSubject, setSelectedSubject] = useState('Высшая математика'); //Хук юк, тут хранится выбранный предмет

 
 const handleSubmit = async (event) => {    //Функция отправки запроса 
  event.preventDefault();

  if(selectedTitle != ''){    //Проверка, чтобы у нас было заполнено хотя бы основное поле
    const formattedDeadline = selectedDate.toISOString().split('T')[0]; // Преобразование даты в строку формата YYYY-MM-DD

  const payload = JSON.stringify({
    name: selectedTitle,
    link: selectedLink,
    lesson: selectedSubject,
    type: selectedTag,
    deadline: formattedDeadline,
    notion_id: 0,
  });

  try {
    const response = await fetch('https://anatoliy_ne_prav.loyalpelmen.ru/tasks', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: payload,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Response:', data);
    props.handleOpenModal();
    props.triggerRender();
  } catch (error) {
    console.error('Error:', error);
  }
  }
};



 const [selectedDate, setDate] = useState(new Date());    



  return (
    <div className="modalMain">
      <div className="modal-content">
        <span className="close" onClick={props.handleOpenModal}>&times;</span>
        <h1>Редактировать</h1>

        <br />
        <div className='title' ><label>Заголовок</label>
        <br/>
        <input type='text' className='titleInput' onChange={handleSetTitle}></input>
        </div>
             <div className="tagPicker"><TagPick handleSelectTag={setSelectedTag}/></div>
                  <div className="tg"><TelegramButton setLink={setLink}/></div>
            <SubjectPick handleSelectedSubject = {setSelectedSubject} className='subjectPick'/>
            
             <MyDatePicker selectedDate={selectedDate} handleSelectedDate={setDate}/>
             <br/>
        <button onClick={handleSubmit} className='gotovoBtn'>Готово</button>
      </div>
      
    </div>
  );
};

export default ModalComponent;