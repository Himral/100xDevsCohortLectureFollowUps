import { useEffect, useState } from "react";

export function useMousePointer() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return mousePosition;
}
