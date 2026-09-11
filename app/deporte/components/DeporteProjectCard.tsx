"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type DeporteProjectCardProps = {
  title: string;
  location: string;
  video: string;
  href: string;
};

export default function DeporteProjectCard({
  title,
  location,
  video,
  href,
}: DeporteProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <Link href={href} className="block">

        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-black border border-zinc-800 group-hover:border-red-600 transition-all duration-500">

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          >
            <source src={video} type="video/mp4" />
          </video>

          {/* OSCURECIMIENTO */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none" />

          {/* BOTÓN PLAY */}

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/80 bg-black/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-red-600 group-hover:border-red-600 group-hover:scale-110">

              <span className="ml-1 text-white text-xl md:text-2xl">
                ▶
              </span>

            </div>

          </div>

          {/* INFORMACIÓN */}

          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">

            <h3 className="text-xl md:text-2xl lg:text-3xl font-black leading-tight text-white transition-colors duration-300 group-hover:text-red-500">
              {title}
            </h3>

            <p className="mt-2 uppercase tracking-[3px] text-xs md:text-sm text-red-500 font-semibold">
              📍 {location}
            </p>

          </div>

        </div>

      </Link>
    </motion.div>
  );
}
