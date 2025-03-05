// App.js
import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Simulate fetching product data on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = [
        { id: 1, name: "Product 1", price: 299.99, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Product 2", price: 499.99, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Product 3", price: 149.99, image: "https://via.placeholder.com/150" },
        { id: 4, name: "Product 4", price: 199.99, image: "https://via.placeholder.com/150" },
        { id: 5, name: "Product 5", price: 349.99, image: "https://via.placeholder.com/150" },
      ];
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  // Recalculate total price whenever cart updates
  useEffect(() => {
    const calculateTotal = () => {
      const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      setTotalPrice(total);
    };

    calculateTotal();
  }, [cartItems]);

  // Add product to cart
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

  // Remove product from cart
  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Clear all items from cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Filter products based on search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="App p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Product List with Search */}
      <div>
        <h1 className="text-2xl font-bold mb-6">Product Listing</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      </div>

      {/* Cart with Clear Button */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
        <button
          onClick={handleClearCart}
          className="mb-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Clear Cart
        </button>
        <Cart
          cartItems={cartItems}
          onRemove={handleRemoveFromCart}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
};

export default App;
