
import Popup from "../popup/popup";
import Popup1 from "../popup/popup1";
import banner from "/banner.jpg";
import { Link } from "react-router-dom";  // Import Link for routing

const HomeBanner = () => {
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center 38%",
        }}
      >
        {/* Button Section */}
        <button
          style={{
            position: "absolute",
            bottom: "380px", // Adjusted to push it up from the bottom
            left: "200px", // Left position
            padding: "10px 40px",
            border: "2px solid black", // Black border
            backgroundColor: "transparent", // Transparent background
            color: "black", // Black text color
            fontSize: "16px", // Font size
            fontWeight: "bold", // Font weight
            cursor: "pointer", // Pointer cursor on hover
            transition: "background-color 0.3s ease, color 0.3s ease", // Smooth transition for background and text color on hover
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "black"; // Change background to black
            e.target.style.color = "white"; // Change text to white
          }} // Hover effect
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent"; // Reset background to transparent
            e.target.style.color = "black"; // Reset text color to black
          }} // Hover effect reset
        >
          <Link to="/shop-all" style={{ textDecoration: "none", color: "inherit" }}>
            Shop All
          </Link>
        </button>

        {/* Popup Section */}
        <div
          style={{
            position: "absolute",
            top: "50%", // Vertically center the popup container
            right: "20px", // Push to the right edge with some padding
            transform: "translateY(-50%)", // Center vertically
            display: "flex", // Use flexbox to arrange the popups
            flexDirection: "column", // Stack popups vertically
            gap: "20px", // Add a gap between the popups (adjust as needed)
          }}
        >
          <Popup/> {/* First Popup */}
          <Popup1/> {/* Second Popup */}
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
