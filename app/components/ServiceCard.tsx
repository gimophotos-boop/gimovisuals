"use client";

import { useEffect, useState } from "react";

interface ServiceCardProps {
  title: string;
  text: string;
  images: string[];
  link: string;
}

export default function ServiceCard({
  title,
  text,
  images,
  link,
}: ServiceCardProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => {
        let next = Math.floor(Math.random() * images.length);

        while (next === prev && images.length > 1) {
          next = Math.floor(Math.random() * images.length);
        }

        return next;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <a
      href={link}
      className="group relative block overflow-hidden rounded-[30px] bg-zinc-950 border border-zinc-800 hover:border-red-600 transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">

        {images.map((image, index) => (
          <img
            key={`${image}-${index}`}
            src={image}
            alt={`${title} - fotografía`}
            className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 ${
              index === current
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

      </div>

      <div className="p-7">
        <h3 className="text-2xl font-black text-white group-hover:text-red-500 transition">
          {title}
        </h3>

        <p className="mt-3 text-gray-400 leading-7">
          {text}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[3px] text-gray-500">
            GIMOVISUALS
          </span>

          <span className="font-semibold text-white group-hover:text-red-500 transition">
            Ver trabajos →
          </span>
        </div>
      </div>
    </a>
  );
}
