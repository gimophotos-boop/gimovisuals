"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  location: string;
  description: string;
  video: string;
  href: string;
};

export default function ProjectCard({
  title,
  location,
  description,
  video,
  href,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-950"
    >
      {/* VIDEO */}

      <div className="relative aspect-video overflow-hidden bg-black">

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute bottom-6 left-6">

          <p className="uppercase tracking-[5px] text-red-500 text-sm font-semibold">
            {location}
          </p>

          <h2 className="mt-2 text-4xl font-black text-white">
            {title}
          </h2>

        </div>

      </div>

      {/* INFORMACIÓN */}

      <div className="p-10">

        <p className="text-lg leading-8 text-gray-400">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-gray-300">
            Fotografía
          </span>

          <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-gray-300">
            Vídeo
          </span>

          <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-gray-300">
            Dron
          </span>

        </div>

        <Link
          href={href}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
        >
          Ver proyecto
          <span>→</span>
        </Link>

      </div>

    </motion.article>
  );
}