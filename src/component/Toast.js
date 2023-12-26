import React, { useState, useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, duration = 1000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  return visible ? (
    <div className="toast">
      <p>{message}</p>
    </div>
  ) : null;
};

export default Toast;
