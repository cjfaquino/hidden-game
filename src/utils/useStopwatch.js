import { useState, useEffect } from 'react';

const useStopwatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (isActive) {
      setStartTime(new Date().getTime());
    }
  }, [isActive]);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setDuration(new Date().getTime() - startTime);
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [startTime, isActive]);

  return [duration, setIsActive];
};

export default useStopwatch;
