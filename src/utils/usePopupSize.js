import { useEffect, useState } from 'react';

function usePopupSize(ref) {
  const [size, setSize] = useState({ x: undefined, y: undefined });

  useEffect(() => {
    if (ref.current) {
      setSize({
        x: ref.current.getBoundingClientRect().width,
        y: ref.current.getBoundingClientRect().height,
      });
    }
  }, []);

  console.log(size);
  return size;
}

export default usePopupSize;
