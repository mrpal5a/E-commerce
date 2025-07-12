import React, { useEffect, useState } from 'react';

const FlashMessage = ({ message, type, isVisible, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => {
          onClose();
        }, 300); // Wait for fade out animation
      }, 2500); // Show for 2.5 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible && !isAnimating) return null;

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return '#d4edda';
      case 'error':
        return '#f8d7da';
      default:
        return '#d1ecf1';
    }
  };

  const getBorderColor = () => {
    switch (type) {
      case 'success':
        return '#c3e6cb';
      case 'error':
        return '#f5c6cb';
      default:
        return '#bee5eb';
    }
  };

  const getTextColor = () => {
    switch (type) {
      case 'success':
        return '#155724';
      case 'error':
        return '#721c24';
      default:
        return '#0c5460';
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      backgroundColor: getBackgroundColor(),
      border: `1px solid ${getBorderColor()}`,
      borderRadius: '8px',
      padding: '12px 20px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      zIndex: 1000,
      maxWidth: '300px',
      animation: isVisible ? 'slideInRight 0.3s ease-out' : 'slideOutRight 0.3s ease-out',
      '@media (max-width: 768px)': {
        right: '10px',
        left: '10px',
        maxWidth: 'none'
      }
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: getTextColor(),
        fontSize: '14px',
        fontWeight: '500'
      }}>
        <span style={{ fontSize: '16px' }}>
          {type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}
        </span>
        {message}
      </div>
    </div>
  );
};

export default FlashMessage; 