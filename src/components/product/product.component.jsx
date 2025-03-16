import { useEffect, useState } from "react";
import { db } from "../../firebase"; // Import the Firestore database
import { collection, getDocs } from "firebase/firestore"; // Firestore functions to fetch data
import { Link } from "react-router-dom"; // Import Link component from react-router-dom

const FeaturedProductsList = () => {
  const [products, setProducts] = useState([]); // State to hold the products

  const staticProducts = [
    {
      id: 1,
      imageUrl: '/AppleiMac 27.jpg',
    },
    {
      id: 2,
      imageUrl: '/image1.jpg',
    },
    {
      id: 3,
      imageUrl: '/image2.jpg',
    },
    {
      id: 4,
      imageUrl: '/image3.jpg',
    },
    {
      id: 5,
      imageUrl: '/image4.jpg',
    },
    {
      id: 6,
      imageUrl: '/image5.jpg',
    },
  ];

  // Fetch data from Firestore when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products"); // Reference to the "products" collection
        const productsSnapshot = await getDocs(productsCollection); // Get the data from the collection
        const productsList = productsSnapshot.docs.map((doc) => doc.data()); // Map the docs to an array of product data
        
        // Combine the static image URLs with the Firestore data
        const combinedProducts = productsList.map((product, index) => ({
          ...product, // Spread product data from Firestore
          imageUrl: staticProducts[index]?.imageUrl || '/default-image.jpg', // Attach the static image
        }));

        setProducts(combinedProducts); // Update the state with the combined data
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts(); // Call the fetch function
  }, ); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "700",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        Explore Our Best-Selling <span style={{ color: "#ff5722" }}>Featured Products</span> – Shop Now!
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)", // 6 items per row
          gap: "20px",
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1200px",
        }}
      >
        {products.map((product, index) => (
          <Link
            key={index}
            to={`/product/${product.id}`} // Link to the product detail page
            style={{
              textDecoration: "none", // Remove underline from the link
              display: "block", // Make the entire card a clickable block
            }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                height: "290px",
                width: "180px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden", // Prevent overflow from card borders
              }}
            >
              {/* Image with hover effect */}
              <div
                style={{
                  height: "200px",
                  overflow: "hidden",
                  borderRadius: "8px",
                  position: "relative", // To position the overlay absolutely
                  transition: "all 0.3s ease", // Smooth transition for the hover effect
                }}
              >
                <img
                  src={product.imageUrl || '/default-image.jpg'} // Default image if no image in Firestore
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "all 0.3s ease", // Smooth transition for the image on hover
                  }}
                />
                {/* Darkening Overlay Effect */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark gray translucent overlay
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                  className="overlay"
                />
              </div>
              <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
              <p>${product.price}</p>

              {/* Static Star Rating Section */}
              <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{
                      fontSize: "24px",
                      color: product.rating >= star ? "#ffc107" : "#ddd", // Yellow for filled stars
                      transition: "color 0.2s",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Add hover effect using JavaScript for dark overlay */}
      <style>
        {`
          .overlay {
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .overlay:hover {
            opacity: 1;
          }
        `}
      </style>
    </>
  );
};

export default FeaturedProductsList;
