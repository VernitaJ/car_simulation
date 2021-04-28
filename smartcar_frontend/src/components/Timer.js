import { useEffect, useState, useRef, useReducer } from "react";

function Timer({ pause }) {
  const [hour, setHours] = useState(0);
  const [minute, setMinutes] = useState(0);
  const [second, setSeconds] = useState(0);
  const toTime = (time) => ("0" + time).slice(-2);

  function useInterval(callback, delay) {
    const savedCallback = useRef();
    useEffect(() => {
      savedCallback.current = callback;
    });
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }, [delay]);
  }
  let resetRef = useRef();
  // Trick to Intialize countRef.current on first render only.
  resetRef.current = resetRef.current || false;

  useEffect(() => {
    if (resetRef.current === true) {
      setSeconds(0);
    }
  });

  useInterval(
    () => {
      if (pause) {
        resetRef.current = true;
        return;
      }
      resetRef.current = false;
      setSeconds(second + 1);
    },
    pause ? null : 1000
  );
  useInterval(
    () => {
      if (pause) {
        resetRef.current = true;
        return;
      }
      resetRef.current = false;
      setSeconds(0);
      setMinutes(minute + 1);
    },
    pause ? null : 1000 * 60
  );
  useInterval(
    () => {
      if (pause) {
        resetRef.current = true;
        return;
      }
      setSeconds(0);
      setMinutes(0);
      setHours(hour + 1);
    },
    pause ? null : 1000 * 60 * 60
  );
  return (
    <div className="timer">
      <span>TIME:</span> <span>{toTime(hour)}:</span>
      <span>{toTime(minute)}:</span>
      <span>{toTime(second)}</span>
    </div>
  );
}

export default Timer;
