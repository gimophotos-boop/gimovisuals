"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const proyectos = [
  {
    title: "Boda Juan Carlos y Yaiza",
    description:
      "Una selección de fotografías de la boda de Juan Carlos y Yaiza.",
    href: "/bodas/proyectos/juan-carlos-yaiza",
    video: "/assets/videos/bodas/juan-carlos-yaiza.mp4",
  },
  {
    title: "Boda Brian y Marina",
    description:
      "Una selección de fotografías de la boda de Brian y Marina.",
    href: "/bodas/proyectos/brian-marina",
    video: "/assets/videos/bodas/brian-marina.mp4",
  },
  {
    title: "Comunión Rosa",
    description:
      "Una selección de fotografías de la comunión de Rosa.",
    href: "/bodas/proyectos/comunion-rosa",
    video: "/assets/videos/bodas/comunion-rosa.mp4",
  },
];

export default function BodasPage() {
  return (
    <main>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            BODAS
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-8">
            Historias que permanecen
          </h1>

          <p className="max-w-3xl text-xl text-gray-400 leading-9">
            Fotografía de bodas y celebraciones para conservar cada momento,
            cada emoción y cada recuerdo.
          </p>

        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            SERVICIOS
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Qué ofrecemos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="rounded-[30px] border border-zinc-800 bg-zinc-950 p-8">
              <h3 className="text-2xl font-black mb-4">
                Fotografía de boda
              </h3>

              <p className="text-gray-400 leading-7">
                Capturamos cada momento de forma natural, elegante y llena de
                emoción.
              </p>
            </div>

            <div className="rounded-[30px] border border-zinc-800 bg-zinc-950 p-8">
              <h3 className="text-2xl font-black mb-4">
                Vídeo cinematográfico
              </h3>

              <p className="text-gray-400 leading-7">
                Películas de boda con un estilo moderno para revivir vuestro
                día una y otra vez.
              </p>
            </div>

            <div className="rounded-[30px] border border-zinc-800 bg-zinc-950 p-8">
              <h3 className="text-2xl font-black mb-4">
                Dron
              </h3>

              <p className="text-gray-400 leading-7">
                Imágenes aéreas espectaculares para completar el recuerdo de
                vuestro gran día.
              </p>
            </div>

            <div className="rounded-[30px] border border-zinc-800 bg-zinc-950 p-8">
              <h3 className="text-2xl font-black mb-4">
                Entrega premium
              </h3>

              <p className="text-gray-400 leading-7">
                Todo el material editado con máxima calidad y preparado para
                compartir y conservar.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            TRABAJOS
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Algunas de nuestras historias
          </h2>

          <p className="max-w-3xl text-lg text-gray-400 leading-8 mb-14">
            Descubre algunos de los trabajos que hemos realizado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {proyectos.map((proyecto, index) => (
              <motion.div
                key={proyecto.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >

                <div className="group overflow-hidden rounded-[30px] border border-zinc-800 bg-zinc-950 transition duration-500 hover:border-red-600">

                  <div className="aspect-[4/3] bg-zinc-900 overflow-hidden">

                    <video
                      className="w-full h-full object-cover"
                      src={proyecto.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />

                  </div>

                  <div className="p-8">

                    <h3 className="text-2xl font-black leading-tight group-hover:text-red-500 transition">
                      {proyecto.title}
                    </h3>

                    <p className="text-gray-400 leading-7 mt-4">
                      {proyecto.description}
                    </p>

                    <div className="mt-6">

                      <Link
                        href={proyecto.href}
                        className="inline-flex rounded-full bg-red-600 px-7 py-3 font-semibold transition hover:bg-red-700"
                      >
                        Ver proyecto
                      </Link>

                    </div>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}
