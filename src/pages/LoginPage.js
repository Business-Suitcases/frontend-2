// import './public/fonts/SF-Pro/stylesheet.css';
import Login from '../components/login/Login';
import { AuthProvider } from '../context/AuthContext';

function LoginPage() {
    return (
      <AuthProvider>
      <Login />
      </AuthProvider>
    );
  }

  export default LoginPage;