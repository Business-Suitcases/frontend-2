import './LSide.css';
import DropdownMenu from './drop-s';
import React, {useState} from 'react';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import Profile from './profile/profile';



export default function LSide(props){

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (
        <div className={`left-background-container${props.theme}`}>
            <DropdownMenu setTitle={props.setTitle} theme={props.theme}/>
            <Switch setTheme={props.setTheme} theme={props.theme}/>
            <div className={`zz${props.theme}`}>
                <h1>Zipper</h1>
            </div>

            <div className='profileDiv'>
            <Profile theme={props.theme}/>

            </div>

            <div className={`ozid${props.theme}`}>
                <h1 className={`ozid-text${props.theme}`} onClick={() => props.setTitle('Ожидающие')}> Ожидающие</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8431D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            
            <div className='lines'>
                <div className={`line18${props.theme}`}>
                </div>
                <div className={`line19${props.theme}`}></div>
                
            </div>
        </div>
    )
}

function Switch({setTheme, theme}) {
    const SwitchTheme = () => {

        if(theme === ' '){
            setTheme('Dark');
            console.log(theme);
        }
        else {
            setTheme(' ');
        };

    };

return (
    <div className="wrapper">
    <div className="toggle-container">
      <p className="change-text"></p>
      <input onChange={SwitchTheme} type="checkbox" id="toggle-btn" defaultChecked />
      <label htmlFor="toggle-btn" className={`toggle-label${theme}`}></label>
    </div>
    <div className={`sun${theme}`}>
        <Sun />
    </div>
    <div className={`moon${theme}`}>
        <Moon />
    </div>
  </div>
);
}
