import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

import "./index.css";
import { Timer, Controls, Settings, Header } from "./components";

function App() {
  const [mode, setMode] = useState(false);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  function handleMode() {
    setMode(!mode);
  }

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes === 0) {
            // Timer is up, you can add a sound or other action here
            resetTimer();
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div
      className={`app w-full h-[100vh] flex justify-center ${
        mode ? " bg-secondary-light" : " bg-main_dark"
      } transition-colors`}
    >
      <div className="pomodoro w-full max-w-[500px] p-3">
        <Header mode={mode} handleMode={handleMode} />
        <div className=" h-[80vh] flex flex-col justify-center">
          <Timer
            seconds={seconds}
            minutes={minutes}
            toggleTimer={toggleTimer}
            isActive={isActive}
            resetTimer={resetTimer}
            mode={mode}
          />
          <Controls
            mode={mode}
            toggleTimer={toggleTimer}
            isActive={isActive}
            resetTimer={resetTimer}
          />
        </div>

        <Settings />
      </div>
    </div>
  );
}

export default App;
