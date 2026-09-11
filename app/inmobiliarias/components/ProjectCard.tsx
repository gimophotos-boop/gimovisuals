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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group overflow-hidden rounded-[24px] border border-zinc-800 bg-zinc-950 hover:border-red-600 transition-all duration-500"
    >
      <Link href={href} className="block">

        <div className="aspect-video overflow-hidden bg-black">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div className="p-6">

          <p className="mb-2 uppercase tracking-[3px] text-sm text-red-500 font-semibold">
            {location}
          </p>

          <h2 className="mb-3 text-2xl font-black group-hover:text-red-500 transition-colors duration-300">
            {title}
          </h2>

          <p className="mb-6 text-sm text-gray-400 leading-6">
            {description}
          </p>

          <span className="inline-flex rounded-full border border-red-600 px-6 py-3 text-sm font-semibold text-white group-hover:bg-red-600 transition-all duration-300">
            Ver proyecto →
          </span>

        </div>

      </Link>
    </motion.div>
  );
}
