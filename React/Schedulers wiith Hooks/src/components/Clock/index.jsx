import { useEffect, useState } from "react";
import "./index.css";

const Clock = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
      
    }, 1000);
    return () => {
      clearInterval(timerId);
      console.log("interval cleared")
    };
  },[]);
  
  return (
    <div className="clock-container">
      <h1 className="heading">Clock</h1>

      <img
        className="clock-image"
        src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
        alt="clock"
      />

      <p className="time">{date}</p>
    </div>
  );
};

export default Clock;
