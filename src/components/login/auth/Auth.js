import './Auth.css'

export default function Auth(){
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
                        <input type="text" placeholder="Почта" className="inptPoch"></input>
                        <input type="text" placeholder="Пароль" className="inptPar"></input>
                        <button className='button'>Войти</button>
                        <button className='buttonG'>Войти</button>
                <button className='buttonT'>Войти</button>
                    </form>
                </div>
            </div>
        </div>
    )
}