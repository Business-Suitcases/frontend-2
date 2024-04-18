import './LSide.css';

export default function LSide(){
    return (
        <div className='left-background-container'>
            <div className='zz'>
                <h1>Zipper</h1>
            </div>
            <div className='profile'>
                <div className='text'>
                    <h1>Vlad Gavrilenko</h1>
                </div>
                <div className='avatar'>
                    <h1 className='text-v'>V</h1>
                </div>
            </div>
            <div className='lines'>
                <div className='line18'></div>
                <div className='line19'></div>
            </div>
            <div className='list-container'>
                <button className='menu-btn'>
                    <h1 className='text-btn'>Предметы</h1>
                </button>
                <nav className='menu'>
                    <ul className='menu-item>'>Высшая математика</ul>
                    <ul className='menu-item>'>Истори</ul>
                    <ul className='menu-item>'>ВВИТ</ul>
                    <ul className='menu-item>'>Философия</ul>
                    <ul className='menu-item>'>Английский язык</ul>
                </nav>
            </div>
        </div>
    )
}