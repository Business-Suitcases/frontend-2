import React, { useState } from 'react';
import './okno.css';
import TagPick from './tag-picker/TagPick';
import TelegramButton from './tgBtn/tgBtn.js';
import SubjectPick from './subject-picker/SubjectPick.js';




const ModalComponent = (props) => {

 const [selectedTag, setSelectedTag] = useState(''); //Хук-юк, здесь будет хранится переменная, указыввающая на то, какой тэг был выбран

 const handleSelectTag = (tag) =>{    //Функция для присвоения нужного тэга
  setSelectedTag(tag);
 }

const [selectedSubject, setSelectedSubject] = useState(''); //Хук юк, тут хранится выбранный предмет

 const handleSelectedSubject = (subject) => {
  setSelectedSubject(subject);
 }
 
 const testFunc = () => {
  console.log(`Тэг ${selectedTag}`);
  console.log(`Предмет ${selectedSubject}`);
 }



  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.handleOpenModal}>&times;</span>
        <h1>Редактировать</h1>

        <br />
        <div className='title'><label>Заголовок</label>
        <br/>
        <input type='text' className='titleInput'></input>
        </div>
           {/* <div className='tagAndTg'> */}
             <div className="tagPicker"><TagPick handleSelectTag={setSelectedTag}/></div>
                  <div className="tg"><TelegramButton/></div>
            {/* </div> */}
            <SubjectPick handleSelectedSubject = {setSelectedSubject} className='subjectPick'/>
            <button onClick={testFunc()}>Test Function</button>
      </div>
      
    </div>
  );
};

export default ModalComponent;