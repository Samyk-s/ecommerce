import { useState, useEffect } from "react";
import Popup from "../popup/popup";
import Popup1 from "../popup/popup1";
import banner from "/banner.jpg";
import { Link } from "react-router-dom";
import AnimatedIntro from "../animation/AnimatedIntro";

const HomeBanner = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);

  useEffect(() => {
    setShowPopup(true);
    const timeoutId = setTimeout(() => {
      setShowPopup1(true);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  const popupStyle = {
    opacity: showPopup ? 1 : 0,
    transform: showPopup ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 1s ease, transform 1s ease",
  };

  const popup1Style = {
    opacity: showPopup1 ? 1 : 0,
    transform: showPopup1 ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 1s ease 1s, transform 1s ease 1s",
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center 38%",
      }}
    >
      {/* Animated Character + Arrow + Portfolio Card */}
      <AnimatedIntro />
      {/* Shop All Button */}
      <button
        style={{
          position: "absolute",
          bottom: "380px",
          left: "200px",
          padding: "10px 40px",
          border: "2px solid black",
          backgroundColor: "transparent",
          color: "black",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background 0.7s ease, color 1.3s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.background =
            "linear-gradient(to right, #000000 4%, #2c3e50 100%)";
          e.target.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "transparent";
          e.target.style.color = "black";
        }}
      >
        <Link
          to="/shop-all"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Shop All
        </Link>
      </button>

      {/* Two Popups on the Right */}
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
        <div style={popupStyle}>{showPopup && <Popup />}</div>
        <div style={popup1Style}>{showPopup1 && <Popup1 />}</div>
      </div>
    </div>
  );
};

export default HomeBanner;
