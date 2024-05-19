import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;