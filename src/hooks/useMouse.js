// hooks/useMouse.js
import { useRef, useState, useEffect } from "react";

export default function useMouse() {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({
    elementX: 0,
    elementY: 0,
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      setMousePosition({
        elementX: event.clientX - rect.left,
        elementY: event.clientY - rect.top,
        screenX: event.screenX,
        screenY: event.screenY,
        clientX: event.clientX,
        clientY: event.clientY,
      });
    };

    const node = ref.current;
    window.addEventListener('mousemove',handleMouseMove)

    return () => {
      if (node) {
        window.removeEventListener('mousemove',handleMouseMove)
      }
    };
  }, []);

  return [mousePosition, ref];
}
