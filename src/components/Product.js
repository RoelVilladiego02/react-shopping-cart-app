import React from "react";

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product border rounded p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600 mb-2">Price: ₱{product.price.toFixed(2)}</p>
      <button
        className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;