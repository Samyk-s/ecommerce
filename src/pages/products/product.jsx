// src/ProductList.js
import { useEffect, useState } from "react";
import {db} from "../../firebase"; // Import the Firestore database
import { collection, getDocs } from "firebase/firestore"; // Firestore functions to fetch data

const ProductList = () => {
  const [products, setProducts] = useState([]); // State to hold the products

  // Fetch data from Firestore when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products"); // Reference to the "products" collection
        const productsSnapshot = await getDocs(productsCollection); // Get the data from the collection
        const productsList = productsSnapshot.docs.map(doc => doc.data()); // Map the docs to an array of product data
        setProducts(productsList); // Update the state with fetched data
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
