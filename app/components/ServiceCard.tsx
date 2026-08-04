"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  title: string;
  text: string;
  video: string;
  link: string;
};

export default function ServiceCard({
  title,
  text,
  video,
  link,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -10 }}
      className="overflow-hidden rounded-[30px] border border-zinc-800 bg-zinc-950"
    >
      <div className="aspect-[16/10] overflow-hidden bg-black">

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>

      </div>

      <div className="p-8">

        <h3 className="text-3xl font-bold text-white mb-4">
          {title}
        </h3>

        <p className="text-gray-400 leading-8 mb-8">
          {text}
        </p>

        <Link
          href={link}
          className="inline-flex rounded-full bg-red-600 px-7 py-3 font-bold text-white transition hover:bg-red-700"
        >
          Ver más
        </Link>

      </div>

    </motion.div>
  );
}