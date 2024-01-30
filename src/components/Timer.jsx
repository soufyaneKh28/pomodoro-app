import React, { useState, useEffect } from "react";

const Timer = ({
  minutes,
  seconds,
  toggleTimer,
  isActive,
  resetTimer,
  mode,
}) => {
  return (
    <div className="flex justify-center items-center h-[400px]  ">
      <div
        className={`" w-[200px] h-[200px] flex justify-center items-center  rounded-full border-4 ${
          mode ? "border-main_dark" : " border-secondary_light"
        }`}
      >
        <p
          className={`${
            mode ? "text-main_dark" : " text-secondary_light"
          }  font-bold text-[28px]`}
        >
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
};
export default Timer;
