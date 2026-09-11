"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type EventProjectCardProps = {
  title: string;
  location: string;
  href: string;
  images: string[];
};

export default function EventProjectCard({
  title,
  location,
  href,
  images,
}: EventProjectCardProps) {
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
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group overflow-hidden border border-zinc-800 bg-zinc-950 hover:border-red-600 transition-all duration-500"
    >
      <Link href={href} className="block">

        <div className="relative aspect-[4/3] overflow-hidden bg-black">

          {images.map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={image}
              alt={title}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                index === current
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />

        </div>

        <div className="px-6 py-5">

          <h3 className="text-xl md:text-2xl font-black leading-tight text-white group-hover:text-red-500 transition-colors duration-300">
            {title}
          </h3>

          <p className="mt-2 text-xs md:text-sm uppercase tracking-[3px] text-red-500 font-medium">
            {location}
          </p>

        </div>

      </Link>
    </motion.div>
  );
}
