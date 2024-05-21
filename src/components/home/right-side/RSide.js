import { useState } from 'react';
import '../../../../src/components/home/right-side/RSide.css';
import ModalComponent from './okno';
import { Plus, Proportions } from 'lucide-react';



export default function RSide(props){

    const [isOpen, setIsOpen] = useState(false)

    const [subjectTitle, setSubjectTitle] = useState('Всшая мотемотика')

     function handleOpenModal() { setIsOpen(!isOpen) }
    return (
        <div className='right-background-container'>
            <div>
            {/* <svg className='btn-plus' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E63EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg> */}
            </div>
            <div className='position-side-text'>
                <h1 className='top-side-text'>{props.titleSubject}</h1>
            </div>
            <div className='btn-poz'>
                <button className='btn-zad' onClick={handleOpenModal}>
                    <div>
                        <p className='btn-text'>  Добавить задание </p>  
                    </div>
                    <Plus />

                </button>
            </div>
            {isOpen ? <ModalComponent handleOpenModal={handleOpenModal}/> : ''}
        </div>
    )
}