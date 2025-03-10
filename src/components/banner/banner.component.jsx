import Popup from "../popup/popup";
import Popup1 from "../popup/popup1";
import banner from "/banner.jpg";
import { Link } from "react-router-dom";


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
            transition: "background 0.3s ease, color 0.3s ease", // Smooth transition for background and text color
          }}
          onMouseEnter={(e) => {
            e.target.style.background =
              "linear-gradient(to right, #000000 50%, #2c3e50 100%)"; // Delayed gradient from black to a dark gray
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
          <Popup />
          <Popup1 />
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
