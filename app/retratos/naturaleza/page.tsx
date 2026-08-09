"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sesiones = [
  {
    title: "Sesión en el campo con las gemelas Patri y Mire",
    href: "/retratos/naturaleza/patri-mire",
  },
  {
    title: "Sesión de bosque con Andrea",
    href: "/retratos/naturaleza/andrea-bosque",
  },
  {
    title: "Sesión de montaña con Lidia y Natalia",
    href: "/retratos/naturaleza/lidia-natalia",
  },
  {
    title: "Sesión de pueblo y mirador con Adri",
    href: "/retratos/naturaleza/adri-pueblo-mirador",
  },
];

export default function NaturalezaPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <Link
            href="/retratos"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-10"
          >
            ← Volver a Retratos
          </Link>

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            RETRATOS
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Naturaleza / montaña
          </h1>

          <p className="max-w-3xl text-xl text-gray-400 leading-9">
            Sesiones realizadas en entornos naturales, montañas, bosques,
            campos y miradores.
          </p>

        </div>
      </section>

      <section className="pb-28 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {sesiones.map((sesion, index) => (
              <motion.div
                key={sesion.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <Link
                  href={sesion.href}
                  className="group block overflow-hidden rounded-[30px] border border-zinc-800 bg-zinc-950 transition duration-500 hover:border-red-600"
                >

                  <div className="aspect-[4/3] bg-zinc-900 flex items-center justify-center">
                    <span className="text-zinc-700 text-sm uppercase tracking-[4px]">
                      Próximamente
                    </span>
                  </div>

                  <div className="p-8">

                    <h2 className="text-2xl font-black leading-tight group-hover:text-red-500 transition">
                      {sesion.title}
                    </h2>

                    <div className="mt-6">
                      <span className="inline-flex rounded-full bg-red-600 px-7 py-3 font-semibold transition group-hover:bg-red-700">
                        Ver sesión
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
