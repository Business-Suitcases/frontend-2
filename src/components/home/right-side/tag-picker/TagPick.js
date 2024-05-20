import React, { useState } from 'react';
import Modal from './pickerModal';
import './TagPick.css';
import { Proportions } from 'lucide-react';

const tags = [
  "Контрольная работа",
  "Домашнее задание",
  "Лабораторная работа",
];

function TagPick(props)  {  //В пропсах принимается handleSelectTag
  const [selectedTag, setSelectedTag] = useState("Домашнее задание");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    props.handleSelectTag(tag); //Здесь мы отправляем наверх (к исусу) тег, который выбрали
    closeModal();
  };

  const getBackgroundColor = (tag) => {
    switch (tag) {
      case 'Контрольная работа':
          return '#e3caf7' 
        
        break;

        case 'Домашнее задание':
          return '#d0eaff' 
        
        break;

        case 'Лабораторная работа':
          return '#dfffe0' 
        
        break;
    
      default:
        break;
    }
   }

   const getTagClassName = (tag) => {   //Данный жесткий костыль позволяет разукрасить названия предметов в списке в разные цвета. Функция возвращает имя класса для компонента
    switch (tag) {
      case 'Контрольная работа':
          return 'testwork' 
        
        break;

        case 'Домашнее задание':
          return 'homework' 
        
        break;

        case 'Лабораторная работа':
          return 'labwork' 
        
        break;
    
      default:
        break;
    }
   }

  return (
    <div className="tag-picker">
      <h2 className='tagTag'>Тэг</h2>
      <div className="selected-tag" onClick={openModal} style={{backgroundColor: getBackgroundColor(selectedTag)}}>
        {selectedTag}
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal} getBackgroundColor={getBackgroundColor} >
          <div className="tag-list">
            {tags.map((tag) => (
              <div
                key={tag}
                className={getTagClassName(tag)} //Вызываем функцию для присвоения имени класса
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default TagPick;