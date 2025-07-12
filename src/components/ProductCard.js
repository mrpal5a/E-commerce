import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart, isDarkMode }) => {
  return (
    <div style={{
      border: `1px solid ${isDarkMode ? '#444' : '#ddd'}`,
      borderRadius: '8px',
      padding: '1rem',
      backgroundColor: isDarkMode ? '#2d2d2d' : 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
    }}
    >
      <img 
        src={product.image} 
        alt={product.name}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '4px',
          marginBottom: '1rem'
        }}
      />
      <h3 style={{
        fontSize: '1.1rem',
        marginBottom: '0.5rem',
        color: isDarkMode ? '#ffffff' : '#333'
      }}>
        {product.name}
      </h3>
      <p style={{
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#007bff',
        marginBottom: '1rem'
      }}>
        ${product.price}
      </p>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
        <button 
          className="btn btn-primary"
          onClick={() => onAddToCart(product)}
          style={{
            width: '100%'
          }}
        >
          Add to Cart
        </button>
        <Link 
          to={`/product/${product.id}`}
          style={{
            display: 'block',
            textDecoration: 'none'
          }}
        >
          <button 
            style={{
              width: '100%',
              backgroundColor: 'transparent',
              color: '#007bff',
              border: '1px solid #007bff',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#007bff';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#007bff';
            }}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard; 