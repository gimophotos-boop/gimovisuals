"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black">

      <div className="text-center">

        <img
          src="/assets/logo/logo.png"
          alt="GIMOVISUALS"
          className="mx-auto mb-8 h-24 animate-pulse"
        />

        <div className="mx-auto h-1 w-56 overflow-hidden rounded-full bg-zinc-800">

          <div className="h-full w-full animate-[loading_1.8s_linear] bg-red-600" />

        </div>

      </div>

      <style jsx>{`
        @keyframes loading {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0%);
          }
        }
      `}</style>

    </div>
  );
}