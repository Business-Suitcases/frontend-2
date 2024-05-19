import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './context/PrivateRoute.js';
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchedulePage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext.js';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/schedule" element={<SchedulePage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dd" element={<HomePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;