"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type ProjectCardEventoProps = {
  title: string;
  href: string;
  video: string;
  usePhotos: boolean;
};

export default function ProjectCardEvento({
  title,
  href,
  video,
  usePhotos,
}: ProjectCardEventoProps) {

  const [current, setCurrent] = useState(0);

  const slug = useMemo(() => {
    return href.split("/").filter(Boolean).pop() || "";
  }, [href]);

  const images = useMemo(() => {
    if (!usePhotos) return [];

    return Array.from(
      { length: 12 },
      (_, index) =>
        `/assets/images/eventos/${slug}/${index + 1}.jpg`
    );
  }, [slug, usePhotos]);


  useEffect(() => {

    if (!usePhotos || images.length <= 1) return;

    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );

    }, 4000);

    return () => clearInterval(interval);

  }, [images.length, usePhotos]);


  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group overflow-hidden rounded-[24px] border border-zinc-800 bg-zinc-950 hover:border-red-600 transition-all duration-500"
    >

      <Link
        href={href}
        className="block"
      >

        <div className="relative aspect-[4/3] overflow-hidden bg-black">

          {usePhotos ? (

            <>
              {images.map((image, index) => (

                <img
                  key={image}
                  src={image}
                  alt={title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                    index === current
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                />

              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            </>

          ) : (

            <>
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source
                  src={video}
                  type="video/mp4"
                />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            </>

          )}

        </div>


        <div className="p-7">

          <h3 className="text-2xl font-black text-white group-hover:text-red-500 transition-colors duration-300">
            {title}
          </h3>

          <div className="mt-5 flex items-center justify-between">

            <span className="text-xs uppercase tracking-[4px] text-gray-500">
              GIMOVISUALS
            </span>

            <span className="font-semibold text-white group-hover:text-red-500 transition-colors duration-300">
              Ver proyecto →
            </span>

          </div>

        </div>

      </Link>

    </motion.div>
  );
}
