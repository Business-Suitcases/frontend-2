import React from 'react'; 
import { Navigate, Outlet } from 'react-router-dom'; 
import { useAuth } from './AuthContext'; 
 

const PrivateRoute = () => { 
  const { user } = useAuth();
  
  console.log(`Значение user в privateRoute = ${user}`)

  return user == true ? <Outlet /> : <Navigate to="/login" />;  //Outlet - штука для рендера дочерних маршрутов
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