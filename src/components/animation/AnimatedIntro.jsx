import { motion } from "framer-motion";
import { useState } from "react";

const AnimatedIntro = () => {
  const [arrowShoot, setArrowShoot] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const fireworkParticles = [...Array(8).keys()];

  return (
    <div className="absolute bottom-0 left-0 w-full h-full z-10">
      {/* Stickman running */}
      <motion.div
        className="stickman"
        initial={{ x: -100, y: -100 }}
        animate={{ x: 200, y: -100 }}
        transition={{ duration: 5 }}
        onAnimationComplete={() => setArrowShoot(true)}
        style={{ position: "absolute", bottom: "120px", left: "0" }}
      >
        {/* Head */}
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            border: "2px solid black",
            marginBottom: "4px",
            background: "white",
          }}
        />
        {/* Body */}
        <div
          style={{
            width: "2px",
            height: "30px",
            backgroundColor: "black",
            margin: "0 auto",
          }}
        />
        {/* Arms */}
        <div
          style={{
            width: "30px",
            height: "2px",
            backgroundColor: "black",
            transform: "translate(-50%, -15px)",
            position: "relative",
            left: "50%",
          }}
        />
        {/* Legs */}
        <div
          style={{
            width: "30px",
            height: "2px",
            backgroundColor: "black",
            transform: "translate(-50%, 15px) rotate(45deg)",
            position: "relative",
            left: "50%",
          }}
        />
      </motion.div>

      {/* Arrow animation */}
      {arrowShoot && (
        <motion.div
          initial={{ x: 210, y: -100 }}
          animate={{ x: 280, y: -280 }}
          transition={{ duration: 1 }}
          onAnimationComplete={() => setShowCard(true)}
          style={{
            position: "absolute",
            width: "4px",
            height: "40px",
            backgroundColor: "black",
            transform: "rotate(45deg)",
          }}
        />
      )}

      {/* Firework popup */}
      {showCard && (
        <>
          {/* Sparkle particles (burst effect) */}
          {fireworkParticles.map((_, i) => {
            const angle = (i * 360) / fireworkParticles.length;
            const radius = 60;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{ x, y, opacity: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  position: "absolute",
                  top: "calc(25% + 10px)",
                  left: "calc(60%)",
                  width: "6px",
                  height: "6px",
                  backgroundColor: "gold",
                  borderRadius: "50%",
                }}
              />
            );
          })}

          {/* Firework-like popup card */}
          <motion.div
            initial={{ scale: 0.1, opacity: 0, rotate: 90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            className="absolute bg-white px-6 py-4 rounded-xl shadow-xl text-black pointer-events-auto"
            style={{
              top: "calc(25% - 25px)",
              left: "calc(60%)",
              zIndex: 20,
              boxShadow: "0 0 15px rgba(255,215,0,0.6)",
            }}
          >
            <p className="mb-2 font-semibold">Wanna know more about me?</p>
            <a
              href="https://samyakbajr.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Visit Portfolio
            </a>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default AnimatedIntro;
