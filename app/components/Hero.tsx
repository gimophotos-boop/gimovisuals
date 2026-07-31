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

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10"></div>

      <div className="relative z-10 flex items-center h-full">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-red-500 uppercase tracking-[8px] font-bold mb-6"
            >
              GIMOVISUALS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9 }}
              className="text-6xl md:text-8xl font-black leading-none text-white"
            >
              Creamos
              <br />
              contenido
              <br />
              que vende.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.9 }}
              className="mt-8 text-xl text-gray-300 leading-8 max-w-2xl"
            >
              Fotografía, vídeo y dron para empresas, inmobiliarias,
              automoción, deporte, bodas y marcas que quieren destacar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.9 }}
              className="mt-12 flex flex-wrap gap-5"
            >
              <a
                href="#services"
                className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-full font-semibold"
              >
                Ver servicios
              </a>

              <a
                href="#contact"
                className="border border-white/30 hover:border-white transition px-8 py-4 rounded-full font-semibold text-white"
              >
                Solicitar presupuesto
              </a>

            </motion.div>

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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-4xl"
      >
        ↓
      </motion.div>

    </section>
  );
}