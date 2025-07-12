import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data';

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // If product not found, redirect to home
      navigate('/');
    }
  }, [id, navigate]);

  if (!product) {
    return (
      <div className="container" style={{ paddingTop: '2rem', textAlign: 'center' }}>
        <p>Loading...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="container" style={{ paddingTop: '2rem' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        '@media (min-width: 768px)': {
          flexDirection: 'row'
        }
      }}>
        {/* Product Image */}
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center'
        }}>
          <img 
            src={product.image} 
            alt={product.name}
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              '@media (min-width: 768px)': {
                maxWidth: '500px'
              }
            }}
          />
        </div>

        {/* Product Information */}
        <div style={{
          flex: 1,
          padding: '1rem',
          '@media (min-width: 768px)': {
            padding: '0 2rem'
          }
        }}>
          <h1 style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            color: '#333',
            '@media (max-width: 768px)': {
              fontSize: '1.5rem'
            }
          }}>
            {product.name}
          </h1>

          <div style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#007bff',
            marginBottom: '1.5rem'
          }}>
            ${product.price}
          </div>

          <div style={{
            marginBottom: '1.5rem'
          }}>
            <span style={{
              backgroundColor: '#f8f9fa',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              color: '#666',
              border: '1px solid #e9ecef'
            }}>
              {product.category}
            </span>
          </div>

          <div style={{
            marginBottom: '2rem',
            lineHeight: '1.6',
            color: '#666',
            fontSize: '1.1rem'
          }}>
            <p>
              Experience the quality and craftsmanship of our premium {product.name.toLowerCase()}. 
              This carefully selected product offers exceptional value and performance for your needs.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Whether you're looking for style, functionality, or both, this {product.category.toLowerCase()} 
              item delivers on all fronts. Perfect for everyday use or special occasions.
            </p>
          </div>

          <div style={{
            display: 'flex',
            gap: '1rem',
            flexDirection: 'column',
            '@media (min-width: 768px)': {
              flexDirection: 'row'
            }
          }}>
            <button 
              onClick={handleAddToCart}
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                flex: 1
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#0056b3';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#007bff';
              }}
            >
              Add to Cart
            </button>

            <button 
              onClick={() => navigate('/')}
              style={{
                backgroundColor: 'transparent',
                color: '#007bff',
                border: '2px solid #007bff',
                padding: '1rem 2rem',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                flex: 1
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
              Continue Shopping
            </button>
          </div>

          {/* Product Features */}
          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{
              marginBottom: '1rem',
              color: '#333',
              fontSize: '1.2rem'
            }}>
              Product Features
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                padding: '0.5rem 0',
                color: '#666',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ color: '#28a745' }}>✓</span>
                High-quality materials and construction
              </li>
              <li style={{
                padding: '0.5rem 0',
                color: '#666',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ color: '#28a745' }}>✓</span>
                Free shipping on orders over $50
              </li>
              <li style={{
                padding: '0.5rem 0',
                color: '#666',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ color: '#28a745' }}>✓</span>
                30-day return policy
              </li>
              <li style={{
                padding: '0.5rem 0',
                color: '#666',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ color: '#28a745' }}>✓</span>
                24/7 customer support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 