import './sandbox.css';
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InnerModal from './InnerModal';



const Sandbox = () => {
    const [open, setOpen] = useState(false);
    const [innerOpen, setInnerOpen] = useState(false);
    const [selectedTag, setSelectedTag] = useState('');
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const handleInnerOpen = () => setInnerOpen(true);
    const handleInnerClose = () => setInnerOpen(false);
  
    return (
      <div className="App">
        <Button variant="contained" onClick={handleOpen}>Open Modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box className="modal-box">
            <h2 id="modal-title">Редактировать</h2>
            <form>
              <div>
                <label>Заголовок</label>
                <input type="text" name="title" />
              </div>
              <div>
                <label>Тэг</label>
                <input type="text" name="tag" value={selectedTag} readOnly />
                <Button variant="contained" onClick={handleInnerOpen}>Выбрать</Button>
              </div>
              <div>
                <Button variant="contained" onClick={handleClose}>Отмена</Button>
                <Button variant="contained" color="primary" type="submit">Готово</Button>
              </div>
            </form>
            <InnerModal open={innerOpen} onClose={handleInnerClose} setSelectedTag={setSelectedTag} />
          </Box>
        </Modal>
      </div>
    );
  };
  

export default Sandbox;