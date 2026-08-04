"use client";

import { useEffect } from "react";

type Props = {
  images: string[];
  current: number;
  open: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function Lightbox({
  images,
  current,
  open,
  onClose,
  onNext,
  onPrev,
}: Props) {

  useEffect(() => {

    function handleKey(e: KeyboardEvent) {

      if (!open) return;

      if (e.key === "Escape") onClose();

      if (e.key === "ArrowRight") onNext();

      if (e.key === "ArrowLeft") onPrev();

    }

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);

  }, [open, onClose, onNext, onPrev]);

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center">

      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white text-5xl hover:text-red-500 transition"
      >
        ×
      </button>

      <button
        onClick={onPrev}
        className="absolute left-8 text-white text-6xl hover:text-red-500 transition"
      >
        ‹
      </button>

      <img
        src={images[current]}
        alt=""
        className="max-w-[92vw] max-h-[90vh] rounded-2xl"
      />

      <button
        onClick={onNext}
        className="absolute right-8 text-white text-6xl hover:text-red-500 transition"
      >
        ›
      </button>

      <div className="absolute bottom-8 text-gray-300">

        {current + 1} / {images.length}

      </div>

    </div>

  );

}