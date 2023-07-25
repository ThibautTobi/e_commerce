import React, { useState } from 'react';
import './CustomAlert.css';

const CustomAlert = ({ type, message, onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  return visible ? (
    <div className={`custom-alert ${type}`}>
      <div className="custom-alert-content">
        <p>{message}</p>
        <button onClick={handleClose}>OK</button>
      </div>
    </div>
  ) : null;
};

export default CustomAlert;