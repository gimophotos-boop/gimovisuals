"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Automoción",
    image: "/assets/images/covers/automocion.jpg",
    href: "/automocion",
  },
  {
    title: "Inmobiliarias",
    image: "/assets/images/covers/inmobiliarias.jpg",
    href: "/inmobiliarias",
  },
  {
    title: "Empresas",
    image: "/assets/images/covers/empresas.jpg",
    href: "/empresas",
  },
  {
    title: "Retratos",
    image: "/assets/images/covers/retratos.jpg",
    href: "/retratos",
  },
  {
    title: "Eventos",
    image: "/assets/images/covers/eventos.jpg",
    href: "/eventos",
  },
  {
    title: "Dron",
    image: "/assets/images/covers/drone.jpg",
    href: "/drone",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-zinc-950 py-40 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-24">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-5">
            PORTFOLIO
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Algunos de mis trabajos
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Descubre algunos de los proyectos realizados para clientes de diferentes sectores.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {categories.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: .7,
              }}
              whileHover={{
                y: -10,
              }}
              className="overflow-hidden rounded-[30px] border border-zinc-800 bg-black"
            >

              <div className="aspect-[16/10] overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold text-white mb-8">
                  {item.title}
                </h3>

                <Link
                  href={item.href}
                  className="inline-flex rounded-full bg-red-600 px-8 py-3 font-bold text-white hover:bg-red-700 transition"
                >
                  Ver galería
                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}