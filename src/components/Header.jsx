import React from "react";
import CustomizedSwitches from "./CustomizedSwitches";
const Header = ({ mode, handleMode }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1
          className={`${
            mode ? "text-main_dark" : "text-secondary_light"
          }  font-semibold `}
        >
          Pomodoro App
        </h1>
      </div>

      <CustomizedSwitches mode={mode} handleMode={handleMode} />
    </div>
  );
};

export default Header;
