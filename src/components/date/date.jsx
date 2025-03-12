import { useState, useEffect } from "react";

// DateCard for Date
const DateCard = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().toLocaleDateString());
    }, 60000); // Update every 60 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center p-3 shadow-lg h-10 rounded-lg">
      <h1 className="text-lg font-semibold">{date}</h1>
    </div>
  );
};

export default DateCard;
