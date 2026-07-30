"use client";

import { motion } from "framer-motion";

const clients = [
  {
    icon: "🏢",
    name: "Empresas",
    description: "Contenido audiovisual para potenciar la imagen de tu negocio.",
  },
  {
    icon: "🏠",
    name: "Inmobiliarias",
    description: "Fotografía, vídeo y dron para vender propiedades más rápido.",
  },
  {
    icon: "🏎️",
    name: "Automoción",
    description: "Contenido premium para concesionarios y marcas del motor.",
  },
  {
    icon: "🏆",
    name: "Deporte",
    description: "Cobertura profesional de competiciones, clubes y eventos.",
  },
];

export default function Clients() {
  return (
    <section className="relative overflow-hidden bg-black py-40 px-6">

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto">

        <div className="text-center mb-24">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-5">
            ESPECIALIDADES
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Sectores con los
            <br />
            que trabajamos
          </h2>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-8">
            Cada cliente recibe una producción adaptada a sus objetivos y a su imagen.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {clients.map((client, index) => (

            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .12,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group rounded-[36px] border border-zinc-800 bg-zinc-950 p-10 overflow-hidden relative"
            >

              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-red-600/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative">

                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-red-600 text-4xl shadow-lg shadow-red-600/30">
                  {client.icon}
                </div>

                <h3 className="mb-5 text-3xl font-black text-white">
                  {client.name}
                </h3>

                <p className="leading-8 text-gray-400">
                  {client.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}