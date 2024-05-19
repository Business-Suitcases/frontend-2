import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


// Создаем контекст
const AuthContext = createContext();




export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);




  // Метод для входа, который ожидает специфичный content-type вместо JSON
  const login = async (username, password) => { 
    const response = await fetch('https://anatoliy_ne_prav.loyalpelmen.ru/auth/login', { 
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
      }, 
      body: `grant_type=&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&scope=&client_id=&client_secret=` 
    }); 
  
    const text = await response.text(); // Получаем ответ в виде текста 
    console.log(`Текст 1: ${text}`); // Выводим текст ответа для отладки

    let data;
    try {
      const params = new URLSearchParams(text); // Парсим URL-кодированную строку
      data = {};
      for (const [key, value] of params.entries()) {
        data[key] = value; // Преобразуем параметры в объект
        console.log(data.token);
      }
    } catch (e) {
      console.error('Ошибка при разборе URL-кодированной строки:', e);
      throw new Error('Некорректный формат ответа');
    }

    if (response.ok) {
      setUser(true);
      localStorage.setItem('jwt', data.token);
    //    navigate('/home'); // Переход на домашнюю страницу
      return data;
    } else {
      throw new Error(data.message);
    }
  };

  // Метод для выхода
  const logout = async () => {
    setUser(false);

    fetch ('https://anatoliy_ne_prav.loyalpelmen.ru/auth/logout', { 
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
      }, 
      body: ''
    }
)
console.log(user);};

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Хук для использования контекста
export const useAuth = () => {
  return useContext(AuthContext);
};
