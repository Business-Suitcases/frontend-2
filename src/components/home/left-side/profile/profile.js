import {react, useState} from 'react';
import Modal from './profileModal';
import './profile.css';

function Profile(){

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(!isModalOpen);
    const closeModal = () => setIsModalOpen(false);

    return(
     <div >
        <div className='profile' onClick={() => openModal()}>
             <div className='text'>
                    <h1>Vlad Gavrilenko</h1>
                </div>
                <div className='avatar'>
                    <h1 className='text-v'>V</h1>
                </div>
        </div>

        <div className='modalOkno'>
        {isModalOpen ? <Modal onClose={closeModal} /> : ''}
        </div>

       </div>
    )


};

export default Profile;