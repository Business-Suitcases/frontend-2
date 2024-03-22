import './Login.css';
// import '../fonts/SF-Pro/stylesheet.css'; 

function Login() {
    return (
      <div className="App">
        <div className="background">
    <div>
      <div className="login-box">
        <div className="container">
          <h2>Вход</h2>
          <p>Давайте знакомиться!</p>
          <form>
            <div className="input-group">
              {/* <label for="username">Логин</label> */}
              <input
                type="text"
                name="username"
                id="username"
                required=""
                placeholder="Логин"
              />
            </div>
            <div className="input-group">
              {/* <label for="password">Пароль</label> */}
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Пароль"
              />
            </div>
            <button type="submit">Войти</button>
          </form>
        </div>
      </div>
    </div>
  </div>
      </div>
    );
  }

  export default Login;