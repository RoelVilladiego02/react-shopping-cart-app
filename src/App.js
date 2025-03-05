// App.js
import React, { useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 299.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 499.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 149.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Product 4",
      price: 199.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Product 5",
      price: 349.99,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="App p-8">
      <h1 className="text-2xl font-bold mb-6">Product Listing</h1>
      <ProductList products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;
