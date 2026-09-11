"use client";

export default function Cursor() {
  return (
    <div
      className="pointer-events-none fixed z-[9999] hidden lg:block"
      style={{
        left: 0,
        top: 0,
      }}
    />
  );
}
