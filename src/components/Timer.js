import { useEffect } from "react";
import formatTime from "../utils/formatTime";

const Timer = ({ inHome, time, setTime }) => {
  useEffect(() => {
    let interval;
    if (!inHome) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setTime(0);
    }

    // avoids absurd times
    if (time > 86400) setTime(0);

    return () => clearInterval(interval);
  });

  return <>{formatTime(time, setTime)}</>;
};
export default Timer;
