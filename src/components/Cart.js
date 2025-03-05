import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems, onRemove }) => {
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart bg-white p-6 rounded shadow-md">
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} onRemove={onRemove} />
          ))}
          <div className="total-price text-right mt-4 text-lg font-bold">
            Total: ₱{calculateTotal().toFixed(2)}
          </div>
        </>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;