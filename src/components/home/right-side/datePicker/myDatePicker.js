import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'   //Придает дейтпикеру человеческий более-менее вид
import { CiCalendar } from "react-icons/ci";
import './myDatePicker.css';

// Название MyDatePicker и других компонентов обязательно с большой буквы!

function CustomInput({value, onClick}) {
    return(
        <div className='customInputDivs'>   
            <input value={value} onClick={onClick} readOnly className='customInput'></input>
        </div>
    )
}

const MyDatePicker = (props) => {

    return(<div className='pickerContainer'>
        <label className='myLabel'>Дата</label>
        <div className='inputGroup'>
        
        <DatePicker selected={props.selectedDate} onChange={props.handleSelectedDate} customInput={<CustomInput />} className='DatePicker'/>
        <div className='calendarContainer'><CiCalendar/></div>
        </div>
        </div>
    )
        
    


}

export default MyDatePicker;