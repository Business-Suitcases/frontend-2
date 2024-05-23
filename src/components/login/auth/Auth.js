import './Auth.css'
import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";


export default function Auth(){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();


    const navigateMe = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {
      await auth.login(username, password);
      navigateMe('/home')

    } catch (err) {
      alert('Failed to login: ' + err.message);
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await auth.logout();
      alert('Unloginned succsessfully!');
      // Перенаправить пользователя или выполнить другие действия
    } catch (err) {
      alert('Failed to exit: ' + err.message);
    }
  };
  


    return (
        <div className="auth">
            <div className="text-down">
                <h1>электронный дневник</h1>
            </div>
            <div className="text-down-down">
                <h1>все как и раньше, но удобнее</h1>
            </div>
            <div className='zipper'>
                    <h1>Zipper</h1>
                </div>
            <div className="auth__container">
                <div className="auth__title">
                    <h1>Добро пожаловать!</h1>
                </div>
                <div className='another_auth'>
                    <h1>Другие способы аутентификации:</h1>
                </div>
                <div className="auth__form">
                    <form className="login-form">
                        <input type="email" placeholder="Почта" className="inptPoch" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                        <input type="password" placeholder="Пароль" className="inptPar" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <button className='button' onClick={handleSubmit}>Войти</button>
                        <button className='buttonG' onClick={handleLogout}>Войти <FaGoogle className='googleIcon'/></button>
                
                    </form>
                </div>
            </div>
        </div>
    )
}