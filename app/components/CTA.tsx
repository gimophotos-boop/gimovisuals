"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black py-40">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,.18),transparent_65%)]" />

      <div className="relative mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="rounded-[40px] border border-red-600/30 bg-zinc-950 p-14 text-center shadow-[0_0_100px_rgba(220,38,38,.15)]"
        >

          <p className="mb-5 tracking-[8px] text-red-500 font-bold uppercase">
            GIMOVISUALS
          </p>

          <h2 className="mb-8 text-5xl md:text-7xl font-black text-white">
            Tu imagen vende.
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-xl leading-9 text-gray-400">
            Fotografía, vídeo y dron profesional para empresas, inmobiliarias,
            automoción, eventos y deporte.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">

            <a
              href="#contact"
              className="rounded-full bg-red-600 px-10 py-5 text-lg font-bold text-white transition hover:scale-105 hover:bg-red-700"
            >
              Solicitar presupuesto
            </a>

            <a
              href="#portfolio"
              className="rounded-full border border-white/20 px-10 py-5 text-lg font-bold text-white transition hover:border-red-600 hover:text-red-500"
            >
              Ver portfolio
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}