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
      className="overflow-hidden rounded-[30px] border border-zinc-800 bg-zinc-950"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="aspect-video w-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="p-8">

        <p className="mb-3 uppercase tracking-[4px] text-red-500 font-semibold">
          {location}
        </p>

        <h2 className="mb-4 text-4xl font-black">
          {title}
        </h2>

        <p className="mb-8 text-gray-400 leading-8">
          {description}
        </p>

        <Link
          href={href}
          className="inline-flex rounded-full bg-red-600 px-8 py-4 font-semibold hover:bg-red-700 transition"
        >
          Ver proyecto
        </Link>

      </div>
    </motion.div>
  );
}