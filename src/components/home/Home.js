import './Home.css'; 
import LSide from './left-side/LSide'; 
import RSide from './right-side/RSide'; 
import React, { useState } from 'react'; 
import {DropdownMenu} from './left-side/drop-s'; 
 
const Home = () => { 
    const [title, setTitle] = useState('Высшая математика'); 
    const [theme, setTheme] = useState(' ');
 
    return ( 
        <div className='back-ground'> 
            <LSide setTitle={setTitle} theme={theme} setTheme={setTheme}/>  
            <div> 
            </div> 
            <RSide titleSubject={title} theme={theme}/> 
        </div> 
    ); 
} 

export default Home;
 