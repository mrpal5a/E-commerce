import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data';

const Navbar = ({ 
  cartItemCount, 
  selectedCategory, 
  setSelectedCategory, 
  priceRange, 
  setPriceRange,
  isDarkMode,
  toggleDarkMode 
}) => {
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowFilterDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFilterClick = () => {
    setShowFilterDropdown(!showFilterDropdown);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (isMobile) {
      setShowFilterDropdown(false);
    }
  };

  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
    if (isMobile) {
      setShowFilterDropdown(false);
    }
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const FilterContent = () => (
    <div>
      <h4 style={{
        marginBottom: '1.5rem',
        color: isDarkMode ? '#ffffff' : '#333',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        borderBottom: '2px solid #007bff',
        paddingBottom: '0.5rem'
      }}>
        Filters
      </h4>
      
      {/* Category Filter */}
      <div style={{ marginBottom: '2rem' }}>
        <h5 style={{
          marginBottom: '1rem',
          color: isDarkMode ? '#ffffff' : '#333',
          fontSize: '1rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Category
        </h5>
        {categories.map(category => (
          <label key={category} style={{
            display: 'block',
            marginBottom: '0.75rem',
            cursor: 'pointer',
            fontSize: '1rem',
            color: isDarkMode ? '#ffffff' : '#333',
            padding: '0.5rem',
            borderRadius: '4px',
            transition: 'background-color 0.2s ease',
            backgroundColor: selectedCategory === category ? '#e3f2fd' : 'transparent',
            border: selectedCategory === category ? '1px solid #007bff' : '1px solid transparent'
          }}
          onMouseEnter={(e) => {
            if (selectedCategory !== category) {
              e.target.style.backgroundColor = isDarkMode ? '#444' : '#f8f9fa';
            }
          }}
          onMouseLeave={(e) => {
            if (selectedCategory !== category) {
              e.target.style.backgroundColor = 'transparent';
            }
          }}
          >
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={(e) => handleCategoryChange(e.target.value)}
              style={{ 
                marginRight: '0.75rem',
                transform: 'scale(1.2)',
                accentColor: '#007bff'
              }}
            />
            {category}
          </label>
        ))}
      </div>

      {/* Price Range Filter */}
      <div>
        <h5 style={{
          marginBottom: '1rem',
          color: isDarkMode ? '#ffffff' : '#333',
          fontSize: '1rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Price Range
        </h5>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          {[
            { value: 'all', label: 'All Prices' },
            { value: '0-50', label: '$0 - $50' },
            { value: '50-100', label: '$50 - $100' },
            { value: '100+', label: '$100+' }
          ].map(({ value, label }) => (
            <label key={value} style={{ 
              cursor: 'pointer', 
              fontSize: '1rem',
              color: isDarkMode ? '#ffffff' : '#333',
              padding: '0.5rem',
              borderRadius: '4px',
              transition: 'background-color 0.2s ease',
              backgroundColor: priceRange === value ? '#e3f2fd' : 'transparent',
              border: priceRange === value ? '1px solid #007bff' : '1px solid transparent'
            }}
            onMouseEnter={(e) => {
              if (priceRange !== value) {
                e.target.style.backgroundColor = isDarkMode ? '#444' : '#f8f9fa';
              }
            }}
            onMouseLeave={(e) => {
              if (priceRange !== value) {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
            >
              <input
                type="radio"
                name="priceRange"
                value={value}
                checked={priceRange === value}
                onChange={(e) => handlePriceRangeChange(e.target.value)}
                style={{ 
                  marginRight: '0.75rem',
                  transform: 'scale(1.2)',
                  accentColor: '#007bff'
                }}
              />
              {label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <nav style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '1rem 0',
      color: 'white',
      position: 'relative',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Brand */}
        <Link to="/" style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.8rem',
          fontWeight: 'bold',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          ShopVerse
        </Link>
        
        {/* Desktop Navigation */}
        <div className="navbar-links" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          {/* Filter Button */}
          <div style={{ position: 'relative' }} ref={dropdownRef}>
            <button
              onClick={handleFilterClick}
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              🔍 Filter
            </button>
            
            {/* Desktop Dropdown */}
            {showFilterDropdown && !isMobile && (
              <div className="filter-dropdown">
                <FilterContent />
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="theme-toggle"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {/* Cart */}
          <Link to="/cart" style={{
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            transition: 'all 0.3s ease',
            backgroundColor: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
            e.target.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
            e.target.style.transform = 'translateY(0)';
          }}
          >
            <span>🛒</span>
            <span style={{ fontWeight: '500' }}>Cart ({cartItemCount})</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'none',
            '@media (max-width: 768px)': {
              display: 'block'
            }
          }}
        >
          {showMobileMenu ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="navbar-links mobile-open">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1rem',
            backgroundColor: 'rgba(0,0,0,0.1)',
            borderRadius: '8px',
            margin: '0 1rem'
          }}>
            {/* Filter Button */}
            <div style={{ position: 'relative' }} ref={dropdownRef}>
              <button
                onClick={handleFilterClick}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.3)',
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  fontWeight: '500',
                  width: '100%',
                  textAlign: 'left'
                }}
              >
                🔍 Filter Products
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                fontWeight: '500',
                width: '100%',
                textAlign: 'left'
              }}
            >
              {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>

            {/* Cart */}
            <Link to="/cart" style={{
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              transition: 'all 0.3s ease',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.3)',
              fontWeight: '500'
            }}>
              <span>🛒</span>
              <span>Cart ({cartItemCount})</span>
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Filter Modal */}
      {showFilterDropdown && isMobile && (
        <div className="filter-dropdown-mobile" onClick={() => setShowFilterDropdown(false)}>
          <div className="filter-dropdown-mobile-content" onClick={(e) => e.stopPropagation()}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{ margin: 0, color: isDarkMode ? '#ffffff' : '#333' }}>Filters</h3>
              <button
                onClick={() => setShowFilterDropdown(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#666'
                }}
              >
                ✕
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 