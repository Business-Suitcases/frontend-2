import React, { useState } from 'react'; 
import { ChevronDown, ChevronUp } from 'lucide-react'; 
 
function DropdownMenu ({setRetard, testValue}) {  // Изменено для деструктуризации пропсов.
  const handleSelectSubject = (title) => { 
    // props.setRetard(title); 
    console.log(setRetard);
    console.log(testValue )
  }
 
  const [isOpen, setIsOpen] = useState(false);  // состояние для открытия и закрытия списка 
 
  const toggleDropdown = () => setIsOpen(!isOpen);  // функция для переключения состояния 
 
  return ( 
    <div className='all_objects'> 
      <div onClick={toggleDropdown} style={{ cursor: 'pointer' }}> 
        {isOpen ? <div className='subjects'> 
          <p> 
            <ChevronDown /> 
            <div> 
              <p className='text_p'>Предметы</p> 
            </div> 
          </p> 
        </div> :  
        <div> 
          <p>  
            <ChevronUp   />  
            <div> 
              <p className='text_p'>Предметы</p> 
            </div> 
          </p> 
        </div> 
        } 
      </div> 
      {isOpen && ( 
        <ul className='pos-text'> 
          <li onClick={() => handleSelectSubject('Высшая математика')}>Высшая Математика</li>    
          <li onClick={() => handleSelectSubject('История')}>История</li> 
          <li onClick={() => handleSelectSubject('ВвИТ')}>ВвИТ</li> 
          <li onClick={() => handleSelectSubject('Философия')}>Философия</li> 
          <li onClick={() => handleSelectSubject('Английский язык')}>Английский язык</li> 
        </ul> 
      )} 
    </div> 
  ); 
} 
 
export default DropdownMenu;
