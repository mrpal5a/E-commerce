import React, { useState } from 'react';
import CartItem from '../components/CartItem';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    onCheckout();
    setShowConfirmation(true);
  };

  if (showConfirmation) {
    return (
      <div className="container" style={{ paddingTop: '2rem' }}>
        <div style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div style={{
            fontSize: '4rem',
            marginBottom: '1rem'
          }}>
            🎉
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            color: '#28a745',
            fontWeight: 'bold',
            '@media (max-width: 768px)': {
              fontSize: '2rem'
            }
          }}>
            Thank you for shopping with us!
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            Your order has been placed successfully! You will receive a confirmation email shortly.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#0056b3';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#007bff';
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ paddingTop: '2rem' }}>
        <h1 style={{
          marginBottom: '2rem',
          color: '#333',
          textAlign: 'center'
        }}>
          Shopping Cart
        </h1>
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#666', marginBottom: '1rem' }}>
            Your cart is empty
          </h3>
          <p style={{ color: '#999' }}>
            Add some products to your cart to get started!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '2rem' }}>
      <h1 style={{
        marginBottom: '2rem',
        color: '#333',
        textAlign: 'center'
      }}>
        Shopping Cart
      </h1>
      
      <div style={{
        display: 'flex',
        gap: '2rem',
        flexDirection: 'column',
        '@media (min-width: 768px)': {
          flexDirection: 'row'
        }
      }}>
        {/* Cart Items */}
        <div style={{ flex: 1 }}>
          <h3 style={{
            marginBottom: '1rem',
            color: '#333'
          }}>
            Items ({totalItems})
          </h3>
          
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveItem={onRemoveItem}
            />
          ))}
        </div>
        
        {/* Order Summary */}
        <div style={{
          width: '100%',
          '@media (min-width: 768px)': {
            width: '300px'
          },
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          height: 'fit-content'
        }}>
          <h3 style={{
            marginBottom: '1.5rem',
            color: '#333',
            borderBottom: '1px solid #eee',
            paddingBottom: '0.5rem'
          }}>
            Order Summary
          </h3>
          
          <div style={{
            marginBottom: '1rem'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '0.5rem'
            }}>
              <span>Subtotal:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '0.5rem'
            }}>
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              borderTop: '1px solid #eee',
              paddingTop: '0.5rem',
              marginTop: '0.5rem'
            }}>
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          
          <button 
            onClick={handleCheckout}
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1.1rem',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              marginBottom: '1rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#218838';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#28a745';
            }}
          >
            Proceed to Checkout
          </button>
          
          <p style={{
            fontSize: '0.9rem',
            color: '#666',
            textAlign: 'center',
            lineHeight: '1.4'
          }}>
            Secure checkout with encrypted payment processing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart; 