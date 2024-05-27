import { useState } from 'react';
import '../../../../src/components/home/right-side/RSide.css';
import ModalComponent from './okno';
import { Plus, Proportions } from 'lucide-react';
import TaskList from './taskList/taskList';



export default function RSide(props){

    const [forceRender, setForceRender] = useState(1); //ForceRender для списка тасков

    const triggerRender = () => {
        let forceTemp = forceRender;
        setForceRender(forceRender+1);
        console.log('triggerRender run');
        console.log(forceRender);
      };

    const [isOpen, setIsOpen] = useState(false)

     function handleOpenModal() { setIsOpen(!isOpen) }
    return (
        <div className={`right-background-container${props.theme}`}>
            <div>
            {/* <svg className='btn-plus' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E63EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg> */}
            </div>
            <div className={`position-side-text`}>
                <h1 className={`top-side-text${props.theme}`}>{props.titleSubject}</h1>
            </div>
            <div className={`btn-poz`}>
                <button className={`btn-zad${props.theme}`} onClick={handleOpenModal}>
                    <div>
                        <p className={`btn-text${props.theme}`}>  Добавить задание </p>  
                    </div>
                    <Plus className={`btn-plus${props.theme}`}/>
                </button>
                <TaskList subject={props.titleSubject} forceRender={forceRender} triggerRender={triggerRender} theme={props.theme}/>
            </div>
            {isOpen ? <ModalComponent handleOpenModal={handleOpenModal} triggerRender={triggerRender} theme={props.theme}/> : ''}
        </div>
    )
}