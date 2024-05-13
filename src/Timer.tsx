import { useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState<number>(0);

  const handleClickButton = () => {
    setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };
  return (
    <div>
      <h2>타이머: {seconds}초</h2>
      <button onClick={handleClickButton}>시작</button>
    </div>
  );
};

export default Timer;
