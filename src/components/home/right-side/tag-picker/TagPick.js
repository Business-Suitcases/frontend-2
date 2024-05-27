import React, { useState } from 'react';
import Modal from './pickerModal';
import './TagPick.css';

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

  const getBackgroundColor = (tag, theme) => {
      if (theme === 'Dark') {
        switch (tag) {
          case 'Контрольная работа':
              return '#492F64' 
            
            break;
    
            case 'Домашнее задание':
              return '#29456C' 
            
            break;
    
            case 'Лабораторная работа':
              return '#2C593F' 
            
            break;
        
          default:
            break;
        }
        

      } else {
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
      }


   

   const getTagClassName = (tag, theme) => {   //Данный жесткий костыль позволяет разукрасить названия предметов в списке в разные цвета. Функция возвращает имя класса для компонента
    
    if (theme === 'Dark') {
      switch (tag) {
        case 'Контрольная работа':
            return 'testworkDark' 
          
          break;
  
          case 'Домашнее задание':
            return 'homeworkDark' 
          
          break;
  
          case 'Лабораторная работа':
            return 'labworkDark' 
          
          break;
      
        default:
          break;
      }
      
    } else {
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
    
   }

  return (
    <div className="tag-picker">
      <h2 className={`tagTag${props.theme}`}>Тэг</h2>
      <div className={`selected-tag${props.theme}`} onClick={openModal} style={{backgroundColor: getBackgroundColor(selectedTag, props.theme)}}>
        {selectedTag}
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal} getBackgroundColor={getBackgroundColor} >
          <div className={`tag-list${props.theme}`}>
            {tags.map((tag) => (
              <div
                key={tag}
                className={getTagClassName(tag, props.theme)} //Вызываем функцию для присвоения имени класса
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