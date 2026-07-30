"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    image: "/assets/images/testimonials/cliente1.jpg",
    name: "Carlos Martínez",
    role: "Gerente · Concesionario",
    text: "Las fotografías y vídeos elevaron la imagen de nuestro concesionario. El resultado fue espectacular.",
  },
  {
    image: "/assets/images/testimonials/cliente2.jpg",
    name: "Laura Gómez",
    role: "Agente inmobiliaria",
    text: "Ahora nuestras viviendas generan muchas más visitas. La diferencia entre un móvil y un trabajo profesional es enorme.",
  },
  {
    image: "/assets/images/testimonials/cliente3.jpg",
    name: "David Ruiz",
    role: "Director de empresa",
    text: "Un trato cercano, rapidez y un contenido de muchísima calidad. Repetiremos sin duda.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-black py-40 overflow-hidden">

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[180px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center mb-24">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-5">
            OPINIONES
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white">
            Lo que dicen nuestros clientes
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .8,
                delay: index * .15,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="rounded-[40px] border border-zinc-800 bg-zinc-950/70 backdrop-blur-xl p-10 hover:border-red-600 transition-all duration-500"
            >

              <div className="flex items-center gap-5 mb-8">

                <Image
                  src={item.image}
                  alt={item.name}
                  width={75}
                  height={75}
                  className="rounded-full border-2 border-red-600"
                />

                <div>

                  <h3 className="text-white text-xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.role}
                  </p>

                </div>

              </div>

              <div className="text-red-500 text-2xl mb-6">
                ★★★★★
              </div>

              <p className="text-gray-300 text-lg leading-9 italic">
                "{item.text}"
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}