import React from "react";

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-40 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-40 object-contain bg-white p-2" 
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-lg font-semibold mb-4">₱{product.price.toFixed(2)}</p>
        <button
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;