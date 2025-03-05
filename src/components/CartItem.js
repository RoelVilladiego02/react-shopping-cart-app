import React from "react";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item flex justify-between items-center border-b py-2">
      <div>
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">Price: ₱{item.price.toFixed(2)}</p>
        <p className="text-gray-600">Quantity: {item.quantity}</p>
      </div>
      <button
        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition"
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
