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
import styled from "styled-components";

const Controls = ({
  mode,
  toggleTimer,
  isActive,
  resetTimer,
  sliderValue,
  handleChange,
  minutes,
  setMinutes,
}) => {
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
        <TemporaryDrawer
          mode={mode}
          sliderValue={sliderValue}
          handleChange={handleChange}
          minutes={minutes}
          setMinutes={setMinutes}
        />
      </div>
    </div>
  );
};
export function TemporaryDrawer({
  mode,
  sliderValue,
  handleChange,
  minutes,
  setMinutes,
}) {
  let anchor = "right";
  const [state, setState] = React.useState({
    right: false,
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

  function timeApplay() {
    toggleDrawer(anchor, false);
  }
  const styled = {
    bgColor: "red",
  };
  const list = (anchor, sliderValue) => {
    return (
      <div>
        <Box
          sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
          role="presentation"
          onKeyDown={toggleDrawer(anchor, false)}
          className=" "
        >
          <div
            className={`${
              mode ? " bg-white" : " bg-main_dark"
            } bg-main_color w-full h-[100vh] p-3 `}
          >
            <div>
              <DiscreteSlider
                sliderValue={sliderValue}
                handleChange={handleChange}
                style={styled}
                timeApplay={timeApplay}
                toggleDrawer={toggleDrawer}
                anchor={anchor}
                mode={mode}
              />
              <div
                className="flex justify-end mt-3 "
                onClick={toggleDrawer(anchor, false)}
              >
                <button
                  onClick={() => setMinutes(sliderValue)}
                  className=" bg-secondary_color text-red-50 px-3 py-2  font-semibold rounded   "
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </Box>
      </div>
    );
  };

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
          {list(anchor, sliderValue)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

function valuetext(value) {
  return `${value}°C`;
}

const PrettoSlider = styled(Slider)({
  color: "#E63946",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 13,
    fontWeight: "bold",
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#E63946",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export function DiscreteSlider({
  sliderValue,
  handleChange,
  minutes,
  timeApplay,
  toggleDrawer,
  anchor,
  mode,
}) {
  return (
    <Box sx={{ width: 200, margin: "auto", paddingTop: 20 }}>
      <div className="flex justify-center w-full">
        <div className=" w-full pt-5 flex flex-col items-center justify-center">
          <h1
            className={` font-bold ${mode ? "text-main_dark" : " text-white"} `}
          >
            Work
          </h1>
          <PrettoSlider
            defaultValue={sliderValue}
            getAriaValueText={valuetext}
            sliderValue={sliderValue}
            onChange={handleChange}
            valueLabelDisplay="on"
            aria-label="pretto slider"
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
