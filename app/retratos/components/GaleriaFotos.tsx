"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const categorias = [
  {
    title: "Playa",
    description: "Sesiones junto al mar, playas y paisajes costeros.",
    image: "/assets/images/retratos/categorias/playa.jpg",
    href: "/retratos/playa",
  },
  {
    title: "Naturaleza",
    description: "Sesiones en bosques, montaña, campo y entornos naturales.",
    image: "/assets/images/retratos/categorias/naturaleza.jpg",
    href: "/retratos/naturaleza",
  },
  {
    title: "Urbano",
    description: "Sesiones callejeras, ciudad, vías y espacios urbanos.",
    image: "/assets/images/retratos/categorias/urbano.jpg",
    href: "/retratos/urbano",
  },
  {
    title: "Embarazo",
    description: "Sesiones de embarazo y maternidad.",
    image: "/assets/images/retratos/categorias/embarazo.jpg",
    href: "/retratos/embarazo",
  },
  {
    title: "Familiar y pareja",
    description: "Sesiones familiares, de pareja y momentos especiales.",
    image: "/assets/images/retratos/categorias/familiar-pareja.jpg",
    href: "/retratos/familiar-pareja",
  },
  {
    title: "Lugares especiales",
    description: "Sesiones realizadas en localizaciones con un carácter especial.",
    image: "/assets/images/retratos/categorias/lugares-especiales.jpg",
    href: "/retratos/lugares-especiales",
  },
];

export default function GaleriaFotos() {
  return (
    <section id="galeria" className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            GALERÍA
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Algunos retratos
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-8">
            Descubre algunas de mis sesiones de retrato, organizadas por
            escenarios y estilos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {categorias.map((categoria, index) => (
            <motion.div
              key={categoria.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
            >
              <Link
                href={categoria.href}
                className="group block overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950"
              >

                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={categoria.image}
                    alt={categoria.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="uppercase tracking-[4px] text-red-500 font-semibold text-sm mb-3">
                      RETRATOS
                    </p>

                    <h3 className="text-3xl font-black text-white">
                      {categoria.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-400 leading-7 mb-5">
                    {categoria.description}
                  </p>

                  <span className="text-white font-semibold group-hover:text-red-500 transition">
                    Ver sesiones →
                  </span>
                </div>

              </Link>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
