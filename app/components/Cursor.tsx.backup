"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] h-5 w-5 rounded-full bg-red-600 mix-blend-difference transition-transform duration-75"
        style={{
          left: position.x - 10,
          top: position.y - 10,
        }}
      />

      <div
        className="pointer-events-none fixed z-[9998] h-12 w-12 rounded-full border border-red-600/40 transition-all duration-150"
        style={{
          left: position.x - 24,
          top: position.y - 24,
        }}
      />
    </>
  );
}