// components/Product.js
import React from "react";

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product-card border rounded p-4 shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600 mb-4">Price: ₱{product.price.toFixed(2)}</p>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
