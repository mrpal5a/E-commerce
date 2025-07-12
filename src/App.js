import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import FlashMessage from './components/FlashMessage';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [flashMessage, setFlashMessage] = useState({
    message: '',
    type: '',
    isVisible: false
  });

  // Load cart and theme from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Apply dark mode to body element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const showFlashMessage = (message, type) => {
    // Clear any existing flash message first
    setFlashMessage({
      message: '',
      type: '',
      isVisible: false
    });
    
    // Set new flash message after a brief delay
    setTimeout(() => {
      setFlashMessage({
        message,
        type,
        isVisible: true
      });
    }, 100);
  };

  const hideFlashMessage = () => {
    setFlashMessage(prev => ({
      ...prev,
      isVisible: false
    }));
  };

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // If item already exists, increase quantity
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item doesn't exist, add it with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    
    showFlashMessage(`✅ ${product.name} added to cart`, 'success');
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    const itemToRemove = cartItems.find(item => item.id === productId);
    
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== productId)
    );
    
    if (itemToRemove) {
      showFlashMessage(`❌ ${itemToRemove.name} removed from cart`, 'error');
    }
  };

  const handleCheckout = () => {
    // Clear cart
    setCartItems([]);
    localStorage.removeItem('cart');
    
    // Show success message
    showFlashMessage('🎉 Order placed successfully! Thank you for shopping with us!', 'success');
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="App">
        <FlashMessage 
          message={flashMessage.message}
          type={flashMessage.type}
          isVisible={flashMessage.isVisible}
          onClose={hideFlashMessage}
        />
        <Navbar 
          cartItemCount={cartItemCount}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                onAddToCart={addToCart}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                isDarkMode={isDarkMode}
              />
            } 
          />
          <Route 
            path="/cart" 
            element={
              <Cart 
                cartItems={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeFromCart}
                onCheckout={handleCheckout}
                isDarkMode={isDarkMode}
              />
            } 
          />
          <Route 
            path="/product/:id" 
            element={
              <ProductDetails 
                onAddToCart={addToCart}
                isDarkMode={isDarkMode}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 