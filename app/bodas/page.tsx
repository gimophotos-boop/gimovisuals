"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const proyectos = [
  {
    title: "Boda Juan Carlos y Yaiza",
    description:
      "Una selección de fotografías de la boda de Juan Carlos y Yaiza.",
    href: "/bodas/proyectos/juan-carlos-yaiza",
  },
  {
    title: "Boda Brian y Marina",
    description:
      "Una selección de fotografías de la boda de Brian y Marina.",
    href: "/bodas/proyectos/brian-marina",
  },
  {
    title: "Comunión Rosa",
    description:
      "Una selección de fotografías de la comunión de Rosa.",
    href: "/bodas/proyectos/comunion-rosa",
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

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Servicios
          </h2>

          <p className="max-w-3xl text-lg text-gray-400 leading-8 mb-14">
            Fotografía natural y cuidada para contar vuestra historia
            de principio a fin.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="rounded-[30px] border border-zinc-800 bg-zinc-950 p-8">
              <h3 className="text-2xl font-black mb-4">
                Cobertura completa
              </h3>
              <p className="text-gray-400 leading-7">
                Desde los preparativos hasta los momentos más importantes
                de la celebración.
              </p>
            </div>

            <div className="rounded-[30px] border border-zinc-800 bg-zinc-950 p-8">
              <h3 className="text-2xl font-black mb-4">
                Fotografía natural
              </h3>
              <p className="text-gray-400 leading-7">
                Imágenes espontáneas y naturales que transmiten lo que
                realmente ocurrió.
              </p>
            </div>

            <div className="rounded-[30px] border border-zinc-800 bg-zinc-950 p-8">
              <h3 className="text-2xl font-black mb-4">
                Recuerdos para siempre
              </h3>
              <p className="text-gray-400 leading-7">
                Una selección cuidada de fotografías para volver a vivir
                cada momento.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            PORTFOLIO
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Trabajos
          </h2>

          <p className="max-w-3xl text-lg text-gray-400 leading-8 mb-14">
            Algunas de las historias que hemos tenido la oportunidad
            de fotografiar.
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
                <Link
                  href={proyecto.href}
                  className="group block overflow-hidden rounded-[30px] border border-zinc-800 bg-zinc-950 transition duration-500 hover:border-red-600"
                >

                  <div className="aspect-[4/3] bg-zinc-900 flex items-center justify-center">
                    <span className="text-zinc-700 text-sm uppercase tracking-[4px]">
                      Portada próximamente
                    </span>
                  </div>

                  <div className="p-8">

                    <h3 className="text-2xl font-black leading-tight group-hover:text-red-500 transition">
                      {proyecto.title}
                    </h3>

                    <p className="text-gray-400 leading-7 mt-4">
                      {proyecto.description}
                    </p>

                    <div className="mt-6">
                      <span className="inline-flex rounded-full bg-red-600 px-7 py-3 font-semibold transition group-hover:bg-red-700">
                        Ver proyecto
                      </span>
                    </div>

                  </div>

                </Link>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}
