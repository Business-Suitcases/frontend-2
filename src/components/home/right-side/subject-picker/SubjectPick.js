import React, { useState } from 'react';
import Modal from './pickerModal';
import './SubjectPick.css';
import { Proportions } from 'lucide-react';

const tags = [
  "Высшая математика",
  "История",
  "ВвИТ",
  "Философия",
  "Английский язык",
];

function SubjectPick(props)  {  //В пропсах принимается handleSelectTag
  const [selectedTag, setSelectedTag] = useState("Высшая математика");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleTagClick = (subject) => {
    setSelectedTag(subject);
    props.handleSelectedSubject(subject); //Здесь мы отправляем наверх (к исусу) тег, который выбрали
    closeModal();
  };



  return (
    <div className="tag-picker">
      <h2 className={`tagTag${props.theme}`}>Предмет</h2>
      <div className={`selected-tag${props.theme}`} onClick={openModal}>
        {selectedTag}
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className={`tag-list${props.theme}`}>
            {tags.map((subject) => (
              <div
                key={subject}
                className={`subject${props.theme}`} //Вызываем функцию для присвоения имени класса
                onClick={() => handleTagClick(subject)}
              >
                {subject}
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default SubjectPick;