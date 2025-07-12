import React from 'react';

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '1rem',
      border: '1px solid #ddd',
      borderRadius: '8px',
      marginBottom: '1rem',
      backgroundColor: 'white'
    }}>
      <img 
        src={item.image} 
        alt={item.name}
        style={{
          width: '80px',
          height: '80px',
          objectFit: 'cover',
          borderRadius: '4px',
          marginRight: '1rem'
        }}
      />
      
      <div style={{
        flex: 1,
        marginRight: '1rem'
      }}>
        <h4 style={{
          marginBottom: '0.5rem',
          color: '#333'
        }}>
          {item.name}
        </h4>
        <p style={{
          color: '#007bff',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          ${item.price}
        </p>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginRight: '1rem'
      }}>
        <button 
          className="btn"
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
          style={{
            width: '30px',
            height: '30px',
            padding: '0',
            fontSize: '1.2rem',
            backgroundColor: '#f8f9fa',
            color: '#333',
            border: '1px solid #ddd'
          }}
        >
          -
        </button>
        <span style={{
          minWidth: '30px',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          {item.quantity}
        </span>
        <button 
          className="btn"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          style={{
            width: '30px',
            height: '30px',
            padding: '0',
            fontSize: '1.2rem',
            backgroundColor: '#f8f9fa',
            color: '#333',
            border: '1px solid #ddd'
          }}
        >
          +
        </button>
      </div>

      <div style={{
        textAlign: 'right',
        marginRight: '1rem'
      }}>
        <p style={{
          fontWeight: 'bold',
          fontSize: '1.1rem',
          color: '#333'
        }}>
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <button 
        className="btn btn-danger"
        onClick={() => onRemoveItem(item.id)}
        style={{
          padding: '0.5rem',
          fontSize: '0.9rem'
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem; 