import { useState } from 'react';
export default function useMouseTracker() {
  let [mousePosition, setPosition] = useState();
  let handleMouseMouse = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);
  return { mousePosition, handleMouseMouse };
}
