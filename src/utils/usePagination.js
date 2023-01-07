import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import levels from '../components/levels';

function usePagination(shortName) {
  const [prevItem, setPrevItem] = useState(null);
  const [nextItem, setNextItem] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const index = levels.findIndex((level) => level.name.short === shortName);

    if (location.state !== null) {
      setCurrentItem(location.state);
    } else {
      setCurrentItem(levels[index]);
    }

    const prevIndex = index - 1;
    const nextIndex = index + 1;

    if (prevIndex >= 0) setPrevItem(levels[prevIndex]);
    if (nextIndex < levels.length) setNextItem(levels[nextIndex]);
  }, [currentItem]);

  return [prevItem, nextItem, currentItem, setCurrentItem];
}

export default usePagination;
