import './Home.css';
import LSide from './left-side/LSide';
import RSide from './right-side/RSide';
import React from 'react';
import DropdownMenu from './left-side/drop-s';


export function Home(){
    return (
        <div className='back-ground'>
            <LSide /> 
            <div>
                <h1>Мой список предметов</h1>
                <DropdownMenu />
            </div>
            <RSide />
        </div>
    )
}

export default Home;