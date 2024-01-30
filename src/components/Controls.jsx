import React, { useState } from "react";
import {
  play_light,
  reset_dark,
  reset_light,
  settings_light,
  play_dark,
  settings_dark,
  pause_dark,
  pause_light,
} from "../assets";
import Button from "@mui/material/Button";

const Controls = ({ mode, toggleTimer, isActive, resetTimer }) => {
  const control = {
    imgDark: isActive ? pause_dark : play_dark,
    imgLight: isActive ? pause_light : play_light,
  };
  return (
    <div className="flex justify-center">
      <div className="flex items-center">
        <button
          className={` bg-secondary_color m-2 rounded-full p-4  flex justify-center items-center
        " w-[50px] h-[50px]"
      }  `}
          onClick={resetTimer}
        >
          <img
            src={mode ? reset_dark : reset_light}
            alt={""}
            className=" w-full object-contian"
          />
        </button>
        <button
          className={` bg-secondary_color m-2 rounded-full p-4  flex justify-center items-center 
        w-[60px] h-[60px]
      }  `}
          onClick={toggleTimer}
        >
          <img
            src={mode ? control.imgDark : control.imgLight}
            alt={""}
            className=" w-full object-contian"
          />
        </button>
        <button
          className={`" bg-secondary_color m-2 rounded-full p-4 h-[50px] flex justify-center items-center 
        w-[50px] h-[50px]"
      }  `}
          onClick={""}
        >
          <img
            src={mode ? settings_dark : settings_light}
            alt={""}
            className=" w-full object-contian"
          />
        </button>
      </div>
    </div>
  );
};

export default Controls;
