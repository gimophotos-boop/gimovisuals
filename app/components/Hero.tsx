"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[750px] overflow-hidden">

      <motion.video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover scale-110"
        animate={{
          scale: [1.1, 1.18, 1.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <source src="/assets/videos/hero.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/5" />

      <div className="relative z-10 flex items-end h-full">

        <div className="max-w-7xl mx-auto px-6 w-full pb-24 md:pb-28">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl"
            >
              Fotografía, vídeo y dron para empresas, inmobiliarias,
              automoción, deporte, bodas y marcas que quieren destacar.
            </motion.p>

          </motion.div>

        </div>

      </div>

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-3xl"
      >
        ↓
      </motion.div>

    </section>
  );
}
