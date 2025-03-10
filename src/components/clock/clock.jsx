import { useState, useEffect } from "react";

const Clockcard = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const interval = setInterval(() => {
      // Update time every minute to avoid unnecessary second updates
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
