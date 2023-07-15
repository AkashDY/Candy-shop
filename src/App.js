import React from "react";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Products from "./components/Products";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  
  const apiURL = 'https://crudcrud.com/api/224da2faf337470595996d2d52fb6e25/products';

  useEffect(() => {
    axios.get(apiURL)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);



  const addProduct = (data) => {
    // setProducts((prevProduct) => [...prevProduct, data]);
    axios.post(apiURL, data)
      .then(response => {
        setProducts((prevProduct) => [...prevProduct, response.data]);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  const addToCart = (count) => {
    setCartCount((prevCount) => prevCount + count);
  };

  const addToCart2 = (count) => {
    setCartCount((prevCount) => prevCount + count);
  };

  const addToCart3 = (count) => {
    setCartCount((prevCount) => prevCount + count);
  };

  const deleteCart = (product, count) => {
    setProducts(products.filter((p) => p !== product));
    setCartCount((prevCount) => prevCount - count);
  };

  // const deleteProduct = (id) => {
  //   axios.delete(`${apiURL}/${id}`)
  //     .then(response => {
  //       setProducts(products.filter((product) => product._id !== id));
  //     })
  //     .catch(error => {
  //       console.error('There was an error!', error);
  //     });
  // };

  const deleteProduct = (id, count) => {
    axios.delete(`${apiURL}/${id}`)
      .then(response => {
        setProducts(products.filter((product) => product._id !== id));
        setCartCount((prevCount) => prevCount - count);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <Form
        addProduct={addProduct}
        addToCart={addToCart}
        addToCart2={addToCart2}
        addToCart3={addToCart3}
      />
      <Products
        products={products}
        addToCart={addToCart}
        addToCart2={addToCart2}
        addToCart3={addToCart3}
        deleteCart={deleteCart}
        deleteProduct={deleteProduct}
      />
    </>
  );
}

export default App;
