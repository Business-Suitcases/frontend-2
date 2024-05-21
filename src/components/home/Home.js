import './Home.css'; 
import LSide from './left-side/LSide'; 
import RSide from './right-side/RSide'; 
import React, { useState } from 'react'; 
import {DropdownMenu} from './left-side/drop-s'; 
 
const Home = () => { 
    const [title, setTitle] = useState('Высшая математика'); 
 
    function handleTitleSubject(title){ 
        setTitle(title); 
    } 
 
    return ( 
        <div className='back-ground'> 
            <LSide setTitle={setTitle}/>  
            <div> 
                <h1>Мой список предметов</h1> 
                <DropdownMenu/> 
            </div> 
            <RSide titleSubject={title}/> 
        </div> 
    ); 
} 

export default Home;
 