import React from 'react';  
import { Navigate, Outlet } from 'react-router-dom';  
import { useAuth } from './AuthContext';  // Путь измените на актуальный для вашего проекта

const PrivateRoute = () => {  
  const { user } = useAuth(); 

  // Обновляем проверку с учётом новой структуры пользователя
  console.log(`Значение user.isAuthenticated в PrivateRoute = ${user.isAuthenticated}`); 

  let isAuthenticated = localStorage.getItem('isAuthenticated')   //Удаляем из сторейджа isAuthenticated

  
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;  // Outlet - штука для рендера дочерних маршрутов 
};  
  
export default PrivateRoute;


// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import Cookies from 'js-cookie';

// const PrivateRoute = () => {
//   const token = localStorage.getItem('jwt');
//   return token ? <Outlet /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;