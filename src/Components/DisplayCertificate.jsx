// DisplayCertificate.js
import React, { useEffect } from 'react';
import styles from '../Styles/DisplayCertificate.module.css';

const DisplayCertificate = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!certificate) return null;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
        <h2>{certificate.title}</h2>
        <p><strong>Issuer:</strong> {certificate.issuer}</p>
        <p><strong>Date:</strong> {certificate.date}</p>
        <img 
          src={certificate.image} 
          alt={`${certificate.title} certificate`} 
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default DisplayCertificate;
