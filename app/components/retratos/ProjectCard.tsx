"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
  index?: number;
};

export default function ProjectCard({
  title,
  description,
  href,
  image,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
    >
      <Link
        href={href}
        className="group block overflow-hidden rounded-[30px] border border-zinc-800 bg-zinc-950 hover:border-red-600 transition-all duration-500"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />
        </div>

        <div className="p-7">
          <h2 className="text-xl md:text-2xl font-black leading-tight group-hover:text-red-500 transition">
            {title}
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            {description}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-gray-500 uppercase tracking-[2px]">
              Retratos
            </span>

            <span className="text-sm font-semibold text-white group-hover:text-red-500 transition">
              
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
