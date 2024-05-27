import {react, useState} from 'react';
import Modal from './profileModal';
import './profile.css';

function Profile(props){

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(!isModalOpen);
    const closeModal = () => setIsModalOpen(false);

    return(
     <div >
        <div className={`profile${props.theme}`} onClick={() => openModal()}>
             <div className={`text${props.theme}`}>
                    <h1>Vlad Gavrilenko</h1>
                </div>
                <div className={`avatar${props.theme}`}>
                    <h1 className={`text-v${props.theme}`}>V</h1>
                </div>
        </div>

        <div className='modalOkno'>
        {isModalOpen ? <Modal onClose={closeModal} theme={props.theme}/> : ''}
        </div>

       </div>
    )


};

export default Profile;