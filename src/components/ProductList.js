// components/ProductList.js
import React from "react";
import Product from "./Product";

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
