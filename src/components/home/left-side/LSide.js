import './LSide.css';
import DropdownMenu from './drop-s';
import React, {useState} from 'react';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';

export default function LSide(){
    return (
        <div className='left-background-container'>
            <DropdownMenu/>
            <Switch />
            <div className='zz'>
                <h1>Zipper</h1>
            </div>
            <div className='ozid'>
                <h1 className='ozid-text'> Ожидающие</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8431D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div className='profile'>
                <div className='text'>
                    <h1>Vlad Gavrilenko</h1>
                </div>
                <div className='avatar'>
                    <h1 className='text-v'>V</h1>
                </div>
            </div>
            <div className='lines'>
                <div className='line18'>
                </div>
                <div className='line19'></div>
            </div>
        </div>
    )
}

function Switch() {
    const [theme, setTheme] = useState("Light");
    const SwitchTheme = () => {
        setTheme((cur) => (cur === "light" ? "dark" : "light"));
    };
return (
    <div className="wrapper">
    <div className="toggle-container">
      <p className="change-text"></p>
      <input onChange={SwitchTheme} type="checkbox" id="toggle-btn" />
      <label htmlFor="toggle-btn" className="toggle-label"></label>
    </div>
    <div className='sun'>
        <Sun />
    </div>
    <div className='moon'>
        <Moon />
    </div>
  </div>
);
}
