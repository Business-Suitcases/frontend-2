import './Auth.css'
import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext'


export default function Auth(){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.login(username, password);
      alert('Login successful!');
      // Перенаправить пользователя или выполнить другие действия
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
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Почта" className="inptPoch" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                        <input type="text" placeholder="Пароль" className="inptPar" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <button className='button'>Войти</button>
                        <button className='buttonG' onClick={handleLogout}>Войти</button>
                <button className='buttonT'>Войти</button>
                    </form>
                </div>
            </div>
        </div>
    )
}