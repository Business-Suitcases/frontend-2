import React, { useState } from 'react';
import './drop-s.css'
import { ChevronDown, ChevronUp } from 'lucide-react';

function DropdownMenu() {
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
        <li>Высшая Математика</li>
        <li>История</li>
        <li>ВвИТ</li>
        <li>Философия</li>
        <li>Английский язык</li>
      </ul>
    )}
    </div>
  );
}

export default DropdownMenu;
