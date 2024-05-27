import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'   //Придает дейтпикеру человеческий более-менее вид
import { CiCalendar } from "react-icons/ci";
import './myDatePicker.css';

// Название MyDatePicker и других компонентов обязательно с большой буквы!

function CustomInput({value, onClick, theme}) {
    return(
        <div className='customInputDivs'>   
            <input value={value} onClick={onClick} readOnly className={`customInput${theme}`}></input>
        </div>
    )
}

const MyDatePicker = (props) => {

    return(<div className='pickerContainer'>
        <label className={`myLabel${props.theme}`}>Дата</label>
        <div className='inputGroup'>
        
        <DatePicker selected={props.selectedDate} onChange={props.handleSelectedDate} customInput={<CustomInput theme={props.theme}/>} className='DatePicker'/>
        <div className='calendarContainer'><CiCalendar/></div>
        </div>
        </div>
    )
        
    


}

export default MyDatePicker;