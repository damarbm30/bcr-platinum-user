import React, { useState, useEffect } from "react";

const Timer24 = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (time < 1) {
      clearInterval();
    } else {
      setTimeout(() => {
        setTime(time - 1000);
      }, 1000);
    }
  }, [time]);

  const getFormattedTime24 = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hour = parseInt(Math.floor(total_minutes / 60));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hour % 60);

    const timerStyle = {
      color: "white",
      backgroundColor: "#FA2C5A",
      borderradius: "2px",
      padding: "0px 2px",
      gap: "10px",
      width: "20px",
      height: "20px",
    };
    return (
      <div>
        <span key="hours" style={timerStyle}>
          {hours}
        </span>
        <span key="dot"> : </span>
        <span key="minutes" style={timerStyle}>
          {minutes}
        </span>
        <span key="dotdot"> : </span>
        <span key="seconds" style={timerStyle}>
          {seconds}
        </span>
      </div>
    );
  };
  return <div>{getFormattedTime24(time)}</div>;
};

export default Timer24;
