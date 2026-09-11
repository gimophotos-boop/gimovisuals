"use client";

import { useEffect, useState } from "react";

interface ServiceCardImagesProps {
  images: string[];
  alt: string;
  interval?: number;
}

export default function ServiceCardImages({
  images,
  alt,
  interval = 3500,
}: ServiceCardImagesProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((previous) => {
        let next = Math.floor(Math.random() * images.length);

        while (next === previous && images.length > 1) {
          next = Math.floor(Math.random() * images.length);
        }

        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images.length) return null;

  return (
    <img
      src={images[current]}
      alt={alt}
      className="absolute inset-0 h-full w-full object-contain transition-opacity duration-700"
    />
  );
}
