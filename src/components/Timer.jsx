import { duration } from "@mui/material";
import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useCountdown } from "react-countdown-circle-timer";
const Timer = ({
  minutes,
  seconds,
  toggleTimer,
  isActive,
  resetTimer,
  mode,
}) => {
  const {
    path,
    pathLength,
    stroke,
    strokeDashoffset,
    remainingTime,
    elapsedTime,
    size,
    strokeWidth,
  } = useCountdown({
    isPlaying: isActive,
    duration: 120,
    colors: "#abc",
  });

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
      <div
        className={` text-[20px] font-bold ${
          mode ? "text-main_dark" : "text-white"
        }`}
      >
        {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
          2,
          "0"
        )}`}
      </div>
    );
  };
  return (
    <div className="flex justify-center items-center h-[400px] ">
      <div className=" relative">
        <CountdownCircleTimer
          isPlaying={isActive}
          duration={120}
          colors={"#E63946"}
          colorsTime={[duration, 0]}
          strokeWidth={15}
        >
          {children}
        </CountdownCircleTimer>

        <div
          className={`" absolute top-[-10px] right-[-10px] w-[200px] h-[200px] flex justify-center items-center  rounded-full border-4 ${
            mode ? "border-main_dark" : " border-secondary_light"
          }`}
        >
          {/* <p
            className={`${
              mode ? "text-main_dark" : " text-secondary_light"
            }  font-bold text-[28px]`}
          >
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </p> */}
        </div>
      </div>
    </div>
  );
};
export default Timer;
