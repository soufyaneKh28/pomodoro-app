import { useState } from "react";
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
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Slider from "@mui/material/Slider";

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
        <TemporaryDrawer mode={mode} />
      </div>
    </div>
  );
};
export function TemporaryDrawer({ mode }) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className=" "
    >
      <div
        className={`${
          mode ? " bg-secondary_light" : " bg-main_dark"
        } bg-main_color w-full h-[100vh] `}
      >
        <DiscreteSlider />
      </div>
    </Box>
  );

  let anchor = "right";

  return (
    <div className="flex items-center">
      <React.Fragment key={anchor}>
        <div
          className=" cursor-pointer bg-secondary_color m-2 rounded-full p-4  flex justify-center items-center 
        w-[50px] h-[50px]"
          onClick={toggleDrawer(anchor, true)}
        >
          <img
            src={mode ? settings_dark : settings_light}
            alt="menu"
            className=" w-full "
          />
        </div>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

function valuetext(value) {
  return `${value}°C`;
}

export function DiscreteSlider() {
  return (
    <Box sx={{ width: 200, margin: "auto", paddingTop: 20 }}>
      <div className="flex justify-center w-full">
        <div className=" w-full pt-5 flex flex-col items-center justify-center">
          <h1 className=" font-bold text-white">Work</h1>
          <Slider
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={5}
            marks
            min={5}
            max={60}
          />
        </div>
      </div>
    </Box>
  );
}
export default Controls;
