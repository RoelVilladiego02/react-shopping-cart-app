import React from "react";
import Product from "./Product";

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list overflow-x-auto">
      <div className="flex space-x-4 pb-4 min-w-full">
        {products.map((product) => (
          <div key={product.id} className="w-64 flex-shrink-0">
            <Product product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;