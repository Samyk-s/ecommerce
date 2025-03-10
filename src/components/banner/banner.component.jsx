import { useState, useEffect } from "react";
import Popup from "../popup/popup";
import Popup1 from "../popup/popup1";
import banner from "/banner.jpg";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);

  useEffect(() => {
    // Show the first popup immediately
    setShowPopup(true);

    // After 1 second, show the second popup
    const timeoutId = setTimeout(() => {
      setShowPopup1(true);
    }, 1000);

    // Cleanup timeout on unmount
    return () => clearTimeout(timeoutId);
  }, []);

  // Popup styles with transition for gradual appearance
  const popupStyle = {
    opacity: showPopup ? 1 : 0,
    transform: showPopup ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 1s ease, transform 1s ease",
  };

  const popup1Style = {
    opacity: showPopup1 ? 1 : 0,
    transform: showPopup1 ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 1s ease 1s, transform 1s ease 1s", // Delayed transition for the second popup
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center 45%",
      }}
    >
      <button
        style={{
          position: "absolute",
          bottom: "380px",
          left: "200px", // Left position
          padding: "10px 40px",
          border: "2px solid black", // Black border
          backgroundColor: "transparent", // Transparent background
          color: "black", // Black text color
          fontSize: "16px", // Font size
          fontWeight: "bold", // Font weight
          cursor: "pointer", // Pointer cursor on hover
          transition: "background 0.7s ease, color 1.3s ease", // Smooth transition for background and text color
        }}
        onMouseEnter={(e) => {
          e.target.style.background =
            "linear-gradient(to right, #000000 4%, #2c3e50 100%)"; // Delayed gradient from black to a dark gray
          e.target.style.color = "white"; // Change text to white
        }} // Hover effect
        onMouseLeave={(e) => {
          e.target.style.background = "transparent"; // Reset background to transparent
          e.target.style.color = "black"; // Reset text color to black
        }} // Hover effect reset
      >
        <Link
          to="/shop-all"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Shop All
        </Link>
      </button>

      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Apply inline style for the gradual fade-in effect */}
        <div style={popupStyle}>{showPopup && <Popup />}</div>
        <div style={popup1Style}>{showPopup1 && <Popup1 />}</div>
      </div>
    </div>
  );
};

export default HomeBanner;
