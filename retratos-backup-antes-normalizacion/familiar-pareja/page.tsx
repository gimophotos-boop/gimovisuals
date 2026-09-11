"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sesiones = [
  {
    title: "Andrea y Laura",
    href: "/retratos/familiar-pareja/andrea-laura",
    image: "/assets/images/retratos/familiar-pareja/andrea-laura/1.jpg",
  },
  {
    title: "Andrea, Lidia y Laura",
    href: "/retratos/familiar-pareja/andrea-lidia-laura",
    image: "/assets/images/retratos/familiar-pareja/andrea-lidia-laura/1.jpg",
  },
  {
    title: "Andrea, Natalia y Lidia",
    href: "/retratos/familiar-pareja/andrea-natalia-lidia",
    image:
      "/assets/images/retratos/familiar-pareja/andrea-natalia-lidia/1.jpg",
  },
  {
    title: "Mire y Patri",
    href: "/retratos/familiar-pareja/mire-patri",
    image: "/assets/images/retratos/familiar-pareja/mire-patri/1.jpg",
  },
  {
    title: "Senay, Yaiza y Juan Carlos",
    href: "/retratos/familiar-pareja/senay-yaiza-juan-carlos",
    image:
      "/assets/images/retratos/familiar-pareja/senay-yaiza-juan-carlos/1.jpg",
  },
  {
    title: "Sofi e Itzi",
    href: "/retratos/familiar-pareja/sofi-itzi",
    image: "/assets/images/retratos/familiar-pareja/sofi-itzi/1.jpg",
  },
];

export default function FamiliarParejaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/retratos"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition mb-12"
          >
            ← Volver a Retratos
          </Link>

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            RETRATOS
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Familiar y pareja
          </h1>

          <p className="max-w-3xl text-xl text-gray-400 leading-9">
            Sesiones familiares y de pareja pensadas para capturar momentos
            naturales, emociones y conexiones auténticas.
          </p>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sesiones.map((sesion, index) => (
              <motion.div
                key={sesion.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <Link
                  href={sesion.href}
                  className="group block overflow-hidden rounded-[30px] border border-zinc-800 bg-zinc-950 hover:border-red-600 transition duration-500"
                >
                  <div className="aspect-[4/3] bg-zinc-900 overflow-hidden">
                    <img
                      src={sesion.image}
                      alt={`Sesión de retrato de ${sesion.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                  </div>

                  <div className="p-7">
                    <h2 className="text-xl md:text-2xl font-black leading-tight group-hover:text-red-500 transition">
                      {sesion.title}
                    </h2>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm text-gray-500 uppercase tracking-[2px]">
                        Retratos
                      </span>

                      <span className="text-sm font-semibold text-white group-hover:text-red-500 transition">
                        Ver sesión →
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