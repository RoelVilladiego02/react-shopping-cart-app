import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  // State to manage the product list
  const [products] = useState([
    { id: 1, name: "Product 1", price: 299.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 499.99, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 149.99, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", price: 199.99, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 5", price: 349.99, image: "https://via.placeholder.com/150" },
  ]);

  // State to manage the shopping cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add products to the cart
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to remove products from the cart
  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="App p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Pass product list and event handlers to ProductList */}
      <div>
        <h1 className="text-2xl font-bold mb-6">Product Listing</h1>
        <ProductList products={products} onAddToCart={handleAddToCart} />
      </div>

      {/* Pass cart data and event handlers to Cart */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
        <Cart cartItems={cartItems} onRemove={handleRemoveFromCart} />
      </div>
    </div>
  );
};

export default App;
