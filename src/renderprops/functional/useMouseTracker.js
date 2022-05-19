import { useState, useCallback } from 'react';
export default function useMouseTracker() {
  let [mousePosition, setPosition] = useState({ x: 0, y: 0 });
  let handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  return { mousePosition, handleMouseMove };
}
