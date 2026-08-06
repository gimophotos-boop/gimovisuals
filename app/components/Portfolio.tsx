"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Automoción",
    image: "/assets/images/portfolio/automocion/1.jpg",
    description:
      "Fotografía y vídeo para concesionarios, vehículos deportivos, clásicos y eventos del motor.",
    href: "/automocion",
  },
  {
    title: "Inmobiliarias",
    image: "/assets/images/portfolio/inmobiliarias/1.jpg",
    description:
      "Fotografía, vídeo, drone y contenido inmobiliario de alto impacto.",
    href: "/inmobiliarias",
  },
  {
    title: "Eventos",
    image: "/assets/images/eventos/living-the-sound-2026/1.jpg",
    description:
      "Fotografía y vídeo profesional para festivales, DJs, conciertos y grandes eventos.",
    href: "/eventos",
  },
  {
    title: "Deporte",
    image: "/assets/images/portfolio/deporte/1.jpg",
    description:
      "Cobertura deportiva para clubes, federaciones, competiciones y eventos.",
    href: "/deporte",
  },
  {
    title: "Bodas",
    image: "/assets/images/portfolio/bodas/1.jpg",
    description:
      "Fotografía y vídeo documental para bodas con estilo cinematográfico.",
    href: "/bodas",
  },
  {
    title: "Retratos",
    image: "/assets/images/portfolio/retratos/1.jpg",
    description:
      "Sesiones individuales, parejas, embarazo, familias y fotografía personal.",
    href: "/retratos",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-black py-32 px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-5">
            PORTFOLIO
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Nuestros trabajos
          </h2>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-9">
            Cada proyecto está pensado para transmitir calidad, generar confianza
            y ayudar a nuestros clientes a destacar frente a su competencia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {categories.map((category, index) => (
            <motion.a
              key={category.title}
              href={category.href}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-zinc-900"
            >
              <div className="relative h-[520px] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <p className="uppercase tracking-[5px] text-red-500 text-sm font-semibold mb-4">
                    GIMOVISUALS
                  </p>

                  <h3 className="text-4xl font-black text-white mb-5">
                    {category.title}
                  </h3>

                  <p className="text-gray-300 leading-8 max-w-xl mb-8">
                    {category.description}
                  </p>

                  <motion.div
                    whileHover={{ x: 6 }}
                    className="inline-flex items-center gap-3 rounded-full border border-red-600 bg-red-600 px-8 py-4 text-white font-semibold"
                  >
                    Ver proyecto
                    <span className="text-xl">→</span>
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}