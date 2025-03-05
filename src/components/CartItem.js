import React from "react";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item flex justify-between items-center border-b border-gray-200 py-4">
      <div className="flex items-start">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-12 h-12 object-contain bg-white rounded mr-4" 
        />
        <div>
          <h3 className="text-md font-semibold text-gray-800">{item.name}</h3>
          <p className="text-gray-600">₱{item.price.toFixed(2)} × {item.quantity}</p>
          <p className="text-blue-600 font-semibold">Total: ₱{(item.price * item.quantity).toFixed(2)}</p>
        </div>
      </div>
      <button
        className="text-red-500 hover:text-red-700 transition-colors duration-200"
        onClick={() => onRemove(item.id)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
