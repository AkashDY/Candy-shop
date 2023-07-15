import React from "react";

const Products = ({
  products,
  addToCart,
  deleteCart,
  addToCart2,
  addToCart3,
  deleteProduct,
}) => {
  const addToCartHandler = () => {
    addToCart(1);
  };

  const addToCartHandler2 = () => {
    addToCart2(2);
  };

  const addToCartHandler3 = () => {
    addToCart3(3);
  };

  const deleteToCartHandler = (product, count) => {
    deleteCart(product);
    deleteProduct(product._id, count);
  };

  return (
    <>
      <div className="products">
        {products.map((product, index) => (
          <div key={index}>
            <h3 style={{ color: 'white'}}>
              Candies Name: {product.inputName} || Description :{" "}
              {product.inputDescription} || Price : {product.inputPrice} ||
              Number of Candies : {product.inputSize}
              <button onClick={() => addToCartHandler(product)}>
                Buy 1 Candy
              </button>
              <button onClick={() => addToCartHandler2(product)}>
                Buy 2 Candy
              </button>
              <button onClick={() => addToCartHandler3(product)}>
                Buy 3 Candy
              </button>
              <button onClick={() => deleteToCartHandler(product, 2)}>
                Delete
              </button>
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
