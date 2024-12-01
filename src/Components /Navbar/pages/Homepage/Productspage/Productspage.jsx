import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Img from "../../../../../assets/img/main.jpg";

function Productspage() {
  const [products, setProducts] = useState([]);
  const [notification, setNotification] = useState("");

  const styles = {
    paperContainer: {
      backgroundImage: `url(${Img})`,
      backgroundSize: "cover",
      backgroundPosition: "center bottom",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    },
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-8 py-16"
      style={styles.paperContainer}
    >
      {notification && (
        <div className="bg-green-500 text-white py-2 px-4 rounded mb-4">
          {notification}
        </div>
      )}
      <h2 className="text-4xl font-bold mb-8 text-white">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            to={`/products/${product._id}`}
            key={product._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img
                src={`http://localhost:5000${product.image}`}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4 bg-gray-900 text-center rounded-b-lg">
              <h3 className="text-lg font-semibold text-gray-100">
                {product.name}
              </h3>
              <p className="text-gray-400 mt-2">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Productspage;
