import './Home.css';
import LSide from './left-side/LSide';
import RSide from './right-side/RSide';

export function Home(){
    return (
        <div className='back-ground'>
            <LSide /> 

            <RSide />
        </div>
    )
}

export default Home;