# React E-commerce Website

A complete React e-commerce website with product listing, cart functionality, filtering, and routing.

## Features

- **Product Listing**: Display 10 sample products with images, titles, prices, and add to cart functionality
- **Cart Management**: Add/remove items, update quantities, persistent storage using localStorage
- **Filtering**: Filter products by category and price range
- **Routing**: Navigation between Home and Cart pages using React Router
- **Responsive Design**: Modern UI with hover effects and clean styling

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation bar with cart count
│   ├── ProductCard.js     # Individual product display
│   ├── FilterSidebar.js   # Category and price filters
│   └── CartItem.js        # Cart item with quantity controls
├── pages/
│   ├── Home.js            # Product listing page with filters
│   └── Cart.js            # Shopping cart page
├── data.js                # Sample product data
├── App.js                 # Main app with routing and state
├── index.js               # App entry point
└── index.css              # Global styles
```

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Development Server**:
   ```bash
   npm start
   ```

3. **Open in Browser**:
   The app will open at `http://localhost:3000`

## Usage

- **Browse Products**: View all products on the home page
- **Filter Products**: Use the sidebar to filter by category or price range
- **Add to Cart**: Click "Add to Cart" on any product
- **View Cart**: Click the cart icon in the navigation bar
- **Manage Cart**: Update quantities or remove items in the cart page
- **Checkout**: Click "Proceed to Checkout" (demo functionality)

## Technologies Used

- React 18 with functional components and hooks
- React Router for navigation
- localStorage for cart persistence
- Inline styles and CSS classes (no Tailwind)
- Unsplash images for product photos

## Features Implemented

✅ React functional components and hooks  
✅ Product listing with 10 sample products  
✅ Add to cart functionality  
✅ Cart persistence with localStorage  
✅ Cart page with item management  
✅ Category and price range filters  
✅ React Router navigation  
✅ Organized folder structure  
✅ Responsive design with modern UI  
✅ Quantity controls in cart  
✅ Total price calculation  
✅ Empty cart state handling 