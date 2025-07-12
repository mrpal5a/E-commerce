import React from 'react';
import { categories } from '../data';

const FilterSidebar = ({ selectedCategory, setSelectedCategory, priceRange, setPriceRange }) => {
  return (
    <div style={{
      width: '250px',
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      height: 'fit-content'
    }}>
      <h3 style={{
        marginBottom: '1rem',
        color: '#333'
      }}>
        Filters
      </h3>
      
      {/* Category Filter */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={{
          marginBottom: '0.5rem',
          color: '#666'
        }}>
          Category
        </h4>
        {categories.map(category => (
          <label key={category} style={{
            display: 'block',
            marginBottom: '0.5rem',
            cursor: 'pointer'
          }}>
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ marginRight: '0.5rem' }}
            />
            {category}
          </label>
        ))}
      </div>

      {/* Price Range Filter */}
      <div>
        <h4 style={{
          marginBottom: '0.5rem',
          color: '#666'
        }}>
          Price Range
        </h4>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          <label style={{ cursor: 'pointer' }}>
            <input
              type="radio"
              name="priceRange"
              value="all"
              checked={priceRange === 'all'}
              onChange={(e) => setPriceRange(e.target.value)}
              style={{ marginRight: '0.5rem' }}
            />
            All Prices
          </label>
          <label style={{ cursor: 'pointer' }}>
            <input
              type="radio"
              name="priceRange"
              value="0-50"
              checked={priceRange === '0-50'}
              onChange={(e) => setPriceRange(e.target.value)}
              style={{ marginRight: '0.5rem' }}
            />
            $0 - $50
          </label>
          <label style={{ cursor: 'pointer' }}>
            <input
              type="radio"
              name="priceRange"
              value="50-100"
              checked={priceRange === '50-100'}
              onChange={(e) => setPriceRange(e.target.value)}
              style={{ marginRight: '0.5rem' }}
            />
            $50 - $100
          </label>
          <label style={{ cursor: 'pointer' }}>
            <input
              type="radio"
              name="priceRange"
              value="100+"
              checked={priceRange === '100+'}
              onChange={(e) => setPriceRange(e.target.value)}
              style={{ marginRight: '0.5rem' }}
            />
            $100+
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar; 