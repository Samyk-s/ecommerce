import { useState, useEffect } from "react";

// Clockcard for Time
const Clockcard = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000); // Update every 60 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center p-3 shadow-lg h-10 rounded-lg">
      <h1 className="text-lg font-semibold">{time}</h1>
    </div>
  );
};

export default Clockcard;
