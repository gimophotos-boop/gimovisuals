"use client";

import { motion } from "framer-motion";

export default function Videos() {
  return (
    <section
      id="videos"
      className="relative py-40 px-6 bg-black overflow-hidden"
    >

      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-red-600/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto">

        <div className="text-center mb-24">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-5">
            SHOWREELS
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Producciones audiovisuales
          </h2>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-8">
            Contenido creado para captar atención desde el primer segundo.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          <motion.div
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            transition={{
              duration: .3,
            }}
            className="group overflow-hidden rounded-[36px] border border-zinc-800 bg-zinc-950"
          >

            <div className="overflow-hidden">

              <video
                src="/assets/videos/automocion.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                className="aspect-[9/16] w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            <div className="p-8">

              <p className="text-red-500 uppercase tracking-[4px] mb-3">
                SHOWREEL
              </p>

              <h3 className="text-3xl font-black text-white mb-4">
                Automoción
              </h3>

              <p className="text-gray-400 leading-8">
                Rally, deportivos, concesionarios, detalle y contenido premium para el sector del motor.
              </p>

            </div>

          </motion.div>

          <motion.div
            whileHover={{
              y: -12,
            }}
            className="rounded-[36px] border border-dashed border-zinc-700 bg-zinc-950 flex items-center justify-center aspect-[9/16]"
          >

            <div className="text-center">

              <h3 className="text-3xl font-black text-white mb-4">
                Próximamente
              </h3>

              <p className="text-gray-500">
                Showreel Inmobiliarias
              </p>

            </div>

          </motion.div>

          <motion.div
            whileHover={{
              y: -12,
            }}
            className="rounded-[36px] border border-dashed border-zinc-700 bg-zinc-950 flex items-center justify-center aspect-[9/16]"
          >

            <div className="text-center">

              <h3 className="text-3xl font-black text-white mb-4">
                Próximamente
              </h3>

              <p className="text-gray-500">
                Showreel Empresas
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}