import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import './sandbox.css';

const InnerModal = ({ open, onClose, setSelectedTag }) => {
  const handleSelectTag = (tag) => {
    setSelectedTag(tag);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="inner-modal-title"
      aria-describedby="inner-modal-description"
    >
      <Box className="inner-modal-box">
        <h2 id="inner-modal-title">Выберите тэг</h2>
        <div>
          <Button onClick={() => handleSelectTag('Тэг 1')}>Тэг 1</Button>
          <Button onClick={() => handleSelectTag('Тэг 2')}>Тэг 2</Button>
          <Button onClick={() => handleSelectTag('Тэг 3')}>Тэг 3</Button>
        </div>
        <Button onClick={onClose}>Отмена</Button>
      </Box>
    </Modal>
  );
};

export default InnerModal;
