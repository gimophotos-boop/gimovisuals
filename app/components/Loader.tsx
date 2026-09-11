"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 0.8,
        delay: 1.4,
        ease: "easeInOut",
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <Image
          src="/assets/logo/logo.png"
          alt="GIMOVISUALS"
          width={320}
          height={120}
          priority
          className="w-[240px] md:w-[320px] h-auto object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
