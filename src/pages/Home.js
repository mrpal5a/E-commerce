import React, { useState, useEffect } from 'react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';

const Home = ({ onAddToCart, selectedCategory, setSelectedCategory, priceRange, setPriceRange, isDarkMode }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      switch (priceRange) {
        case '0-50':
          filtered = filtered.filter(product => product.price <= 50);
          break;
        case '50-100':
          filtered = filtered.filter(product => product.price > 50 && product.price <= 100);
          break;
        case '100+':
          filtered = filtered.filter(product => product.price > 100);
          break;
        default:
          break;
      }
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange]);

  const scrollToProducts = () => {
    document.getElementById('products-section').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="container">
          <h1 className="hero-title">
            Welcome to ShopVerse – Your One-Stop Online Store!
          </h1>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2rem auto',
            lineHeight: '1.6'
          }}>
            Discover amazing products at unbeatable prices. From electronics to fashion, 
            we have everything you need to enhance your lifestyle.
          </p>
          <button 
            onClick={scrollToProducts}
            style={{
              backgroundColor: 'white',
              color: '#667eea',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
            }}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section style={{
        padding: '4rem 0',
        backgroundColor: isDarkMode ? '#2d2d2d' : 'white',
        color: isDarkMode ? '#ffffff' : '#333'
      }}>
        <div className="container">
          <div className="about-layout">
            <div className="about-text">
              <h2 style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                color: isDarkMode ? '#ffffff' : '#333'
              }}>
                About ShopVerse
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                color: isDarkMode ? '#cccccc' : '#666',
                marginBottom: '1rem'
              }}>
                Founded with a passion for quality and customer satisfaction, ShopVerse has been 
                serving customers worldwide since 2020. We believe in providing not just products, 
                but complete shopping experiences that exceed expectations.
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                color: isDarkMode ? '#cccccc' : '#666'
              }}>
                Our curated selection of premium products, combined with exceptional service and 
                competitive pricing, makes us your trusted partner for all your shopping needs.
              </p>
            </div>
            <div className="about-image">
              <div style={{
                width: '200px',
                height: '200px',
                backgroundColor: isDarkMode ? '#444' : '#f8f9fa',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                fontSize: '4rem',
                color: '#667eea'
              }}>
                🛍️
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{
        padding: '4rem 0',
        backgroundColor: isDarkMode ? '#1a1a1a' : '#f8f9fa'
      }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            fontSize: '2rem',
            marginBottom: '3rem',
            color: isDarkMode ? '#ffffff' : '#333'
          }}>
            Why Choose ShopVerse?
          </h2>
          <div className="services-grid">
            {/* Free Shipping */}
            <div className="service-card" style={{
              backgroundColor: isDarkMode ? '#2d2d2d' : 'white',
              color: isDarkMode ? '#ffffff' : '#333'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>
                🚚
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '1rem',
                color: isDarkMode ? '#ffffff' : '#333'
              }}>
                Free Shipping
              </h3>
              <p style={{
                color: isDarkMode ? '#cccccc' : '#666',
                lineHeight: '1.6'
              }}>
                Free shipping on all orders over $50. Fast and reliable delivery to your doorstep.
              </p>
            </div>

            {/* Secure Payment */}
            <div className="service-card" style={{
              backgroundColor: isDarkMode ? '#2d2d2d' : 'white',
              color: isDarkMode ? '#ffffff' : '#333'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>
                🔒
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '1rem',
                color: isDarkMode ? '#ffffff' : '#333'
              }}>
                Secure Payment
              </h3>
              <p style={{
                color: isDarkMode ? '#cccccc' : '#666',
                lineHeight: '1.6'
              }}>
                Your payment information is protected with bank-level security encryption.
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="service-card" style={{
              backgroundColor: isDarkMode ? '#2d2d2d' : 'white',
              color: isDarkMode ? '#ffffff' : '#333'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>
                💬
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '1rem',
                color: isDarkMode ? '#ffffff' : '#333'
              }}>
                24/7 Support
              </h3>
              <p style={{
                color: isDarkMode ? '#cccccc' : '#666',
                lineHeight: '1.6'
              }}>
                Our customer support team is available 24/7 to help with any questions or issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products-section" style={{
        padding: '4rem 0',
        backgroundColor: isDarkMode ? '#2d2d2d' : 'white'
      }}>
        <div className="container" style={{ paddingTop: '0' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2rem',
            marginBottom: '2rem',
            color: isDarkMode ? '#ffffff' : '#333'
          }}>
            Our Products
          </h2>
          
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p style={{ 
              color: isDarkMode ? '#cccccc' : '#666', 
              fontSize: '1rem' 
            }}>
              Use the Filter button in the navigation bar to filter products by category and price range.
            </p>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              color: isDarkMode ? '#cccccc' : '#666'
            }}>
              <h3>No products found</h3>
              <p>Try adjusting your filters using the Filter button in the navigation bar.</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={onAddToCart}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: isDarkMode ? '#1a1a1a' : '#333',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="footer-links">
            <a href="#" className="footer-link">
              About
            </a>
            <a href="#" className="footer-link">
              Contact
            </a>
            <a href="#" className="footer-link">
              Privacy
            </a>
            <a href="#" className="footer-link">
              Terms
            </a>
          </div>
          <p style={{
            color: '#ccc',
            fontSize: '0.9rem'
          }}>
            © 2024 ShopVerse. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home; 