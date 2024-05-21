import React, { createContext, useContext, useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { Navigate } from 'react-router-dom';

// Создаем контекст 
const AuthContext = createContext();

export const AuthProvider = ({ children }) => { 
  const [user, setUser] = useState({ isAuthenticated: false, userInfo: null });

  const handleSetUserFalse = () => { 
    setUser({ isAuthenticated: false, userInfo: null }); 
  };

  const handleSetUserTrue = (userInfo) => { 
    setUser({ isAuthenticated: true, userInfo }); 
  };


  

  const login = async (username, password) => {  
    const response = await fetch('https://anatoliy_ne_prav.loyalpelmen.ru/auth/login', {  
      method: 'POST',  
      headers: {  
        'Content-Type': 'application/x-www-form-urlencoded',  
      },  
      body: `grant_type=&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&scope=&client_id=&client_secret=`  
    });  


    if (response.ok) { 
      console.log('response ok'); 
      localStorage.setItem('isAuthenticated', 'true');
    } else { 
        console.log('response not ok'); 
    } 
  };

  const logout = async () => { 
    setUser({ isAuthenticated: false, userInfo: null });

    fetch('https://anatoliy_ne_prav.loyalpelmen.ru/auth/logout', {  
      method: 'POST',  
      headers: {  
        'Content-Type': 'application/x-www-form-urlencoded',  
      },  
      body: '' 
    });
    console.log(user);
  };

  useEffect(() => {
    console.log("User state changed:", user);
  }, [user]);

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