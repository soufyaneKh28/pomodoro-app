import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

import "./index.css";
import { Timer, Controls, Header } from "./components";
import { clock } from "./assets";

function App() {
  const [mode, setMode] = useState(false);
  const [minutes, setMinutes] = useState(25);

  const [key, setKey] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const [sliderValue, setSliderValue] = React.useState(25);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };
  function handleMode() {
    setMode(!mode);
  }
  const audioRef = React.createRef();
  const playSound = () => {
    // Use the ref to play the audio
    audioRef.current.play();
  };
  // useEffect(() => {
  //   if (isActive) {
  //     if (minutes === 0) {
  //       playSound();

  //       resetTimer();
  //     }
  //   }
  // });
  // useEffect(() => {
  //   let interval;

  //   if (isActive) {
  //     interval = setInterval(() => {
  //       if (minutes === 0) {
  //         // Timer is up, you can add a sound or other action here
  //         playSound();
  //         setIsActive(false);
  //         setKey((prevKey) => prevKey + 1);
  //       }
  //     }, 1000);
  //   } else {
  //     clearInterval(interval);
  //   }

  //   return () => clearInterval(interval);
  // }, [isActive, minutes]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);

    // setSeconds(0);
    setKey((prevKey) => prevKey + 1);
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
            minutes={minutes}
            toggleTimer={toggleTimer}
            isActive={isActive}
            resetTimer={resetTimer}
            mode={mode}
            key={key}
            sliderValue={sliderValue}
            playSound={playSound}
          />
          <audio ref={audioRef} src={clock} />

          <Controls
            mode={mode}
            toggleTimer={toggleTimer}
            isActive={isActive}
            resetTimer={resetTimer}
            sliderValue={sliderValue}
            handleChange={handleChange}
            minutes={minutes}
            setMinutes={setMinutes}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
