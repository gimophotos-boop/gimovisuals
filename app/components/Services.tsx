"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Automoción",
    text: "Fotografía y vídeo profesional para concesionarios, compraventas y particulares.",
    video: "/assets/videos/automocion.mp4",
    link: "/automocion",
  },
  {
    title: "Inmobiliarias",
    text: "Fotografía, vídeo y dron para vender propiedades más rápido.",
    video: "/assets/videos/inmo.mp4",
    link: "/inmobiliarias",
  },
  {
    title: "Empresas",
    text: "Contenido corporativo para potenciar la imagen de tu negocio.",
    image: "/assets/images/covers/empresas.jpg",
    link: "/empresas",
  },
  {
    title: "Retratos",
    text: "Sesiones personales, familiares, embarazo e infantiles.",
    image: "/assets/images/covers/retratos.jpg",
    link: "/retratos",
  },
  {
    title: "Deporte",
    text: "Cobertura completa de eventos deportivos y corporativos.",
    image: "/assets/images/covers/deporte.jpg",
    link: "/deporte",
  },
  {
    title: "Bodas",
    text: "Fotografía y vídeo cinematográfico para inmortalizar vuestro gran día.",
    image: "/assets/images/covers/bodas.jpg",
    link: "/bodas",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black py-40 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-24">
          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-5">
            SERVICIOS
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Qué puedo hacer por ti
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cada proyecto está pensado para transmitir profesionalidad y generar resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-[30px] border border-zinc-800 bg-zinc-950"
            >

              <div className="aspect-[16/10] overflow-hidden bg-black">

                {service.video ? (

                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  >
                    <source src={service.video} type="video/mp4" />
                  </video>

                ) : (

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />

                )}

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-8 mb-8">
                  {service.text}
                </p>

                <Link
                  href={service.link}
                  className="inline-flex rounded-full bg-red-600 px-7 py-3 font-bold text-white transition hover:bg-red-700"
                >
                  Ver más
                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}