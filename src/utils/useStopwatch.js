import { useState, useEffect } from 'react';

const useStopwatch = (active) => {
  const [duration, setDuration] = useState(0);
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setDuration((x) => x + 1);
      }, 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  return [duration, isActive, setIsActive];
};

export default useStopwatch;
