"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Calidad profesional",
    text: "Cada fotografía y vídeo se entrega editado con un acabado cuidado y moderno.",
  },
  {
    title: "Entrega rápida",
    text: "Trabajamos para que tengas tu material listo en el menor tiempo posible.",
  },
  {
    title: "Equipo profesional",
    text: "Fotografía, vídeo 4K y dron para ofrecer el mejor resultado posible.",
  },
  {
    title: "Contenido que vende",
    text: "Creamos imágenes pensadas para captar la atención y generar resultados.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-zinc-950 py-36 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-5">
            ¿POR QUÉ GIMOVISUALS?
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Mucho más que hacer fotos
          </h2>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Creamos contenido audiovisual pensado para transmitir confianza,
            diferenciar tu marca y aumentar el valor de tus servicios.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {items.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: .7,
              }}
              whileHover={{
                y: -10,
              }}
              className="rounded-[30px] border border-zinc-800 bg-black p-10 hover:border-red-600 transition-all duration-300"
            >

              <div className="mb-8 text-5xl">
                🔥
              </div>

              <h3 className="text-white text-2xl font-bold mb-5">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}