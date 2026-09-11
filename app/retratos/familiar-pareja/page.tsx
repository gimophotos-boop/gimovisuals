"use client";

import Navbar from "@/app/components/Navbar";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sesiones = [
  {
    title: "Andrea y Laura",
    description: "Una sesión entre amigas con un estilo urbano y desenfadado.",
    href: "/retratos/familiar-pareja/andrea-laura",
    carpeta: "familiar-pareja/andrea-laura",
  },
  {
    title: "Andrea, Lidia y Laura",
    description: "Una sesión entre amigas combinando naturaleza y un estilo más urbano.",
    href: "/retratos/familiar-pareja/andrea-lidia-laura",
    carpeta: "familiar-pareja/andrea-lidia-laura",
  },
  {
    title: "Andrea, Natalia y Lidia",
    description: "Una sesión entre amigas jugando con los tonos cálidos de la naturaleza.",
    href: "/retratos/familiar-pareja/andrea-natalia-lidia",
    carpeta: "familiar-pareja/andrea-natalia-lidia",
  },
  {
    title: "Mire y Patri",
    description: "Dos hermanas gemelas y una sesión marcada por los tonos cálidos del otoño.",
    href: "/retratos/familiar-pareja/mire-patri",
    carpeta: "familiar-pareja/mire-patri",
  },
  {
    title: "Senay, Yaiza y Juan Carlos",
    description: "Una sesión familiar llena de momentos naturales, luz y complicidad.",
    href: "/retratos/familiar-pareja/senay-yaiza-juan-carlos",
    carpeta: "familiar-pareja/senay-yaiza-juan-carlos",
  },
  {
    title: "Sofi e Itzi",
    description: "Dos amigas, naturaleza, mar y diferentes ambientes en una misma sesión.",
    href: "/retratos/familiar-pareja/sofi-itzi",
    carpeta: "familiar-pareja/sofi-itzi",
  },
];

const backgroundImages = sesiones
  .flatMap((sesion) =>
    Array.from(
      { length: 12 },
      (_, i) =>
        `/assets/images/retratos/${sesion.carpeta}/${i + 1}.jpg`
    )
  )
  .sort(() => Math.random() - 0.5);

function PortadaSesion({
  carpeta,
  titulo,
}: {
  carpeta: string;
  titulo: string;
}) {
  return (
    <div className="absolute inset-0 bg-zinc-950 overflow-hidden">
      <img
        src={`/assets/images/retratos/${carpeta}/1.jpg`}
        alt={titulo}
        className="w-full h-full object-contain transition duration-500 group-hover:scale-[1.02]"
      />
    </div>
  );
}

export default function FamiliarParejaPage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCurrentImage((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <main className="min-h-[1400px] bg-black text-white">

      <Navbar />

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImage ? "opacity-50" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url("${image}")`,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/75" />
      </div>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          <p className="relative top-[110px] uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            RETRATOS
          </p>

          <h1 className="relative top-[130px] text-5xl md:text-7xl font-black mb-6">
            Familiar y pareja
          </h1>

          <p className="relative top-[150px] max-w-3xl text-xl text-gray-400 leading-9">
            Sesiones para parejas, familias y personas que quieren guardar
            momentos especiales juntos.
          </p>

        </div>
      </section>

      <section className="relative z-10 top-[300px] pb-32 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

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
                  className="group block rounded-[24px] border border-zinc-800 bg-zinc-950 hover:border-red-600 transition duration-500"
                >

                  <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden">
                    <PortadaSesion
                      carpeta={sesion.carpeta}
                      titulo={sesion.title}
                    />
                  </div>

                  <div className="px-6 pt-5 pb-8">

                    <h2 className="text-xl md:text-2xl font-black leading-tight break-words group-hover:text-red-500 transition">
                      {sesion.title}
                    </h2>

                    <p className="mt-3 pb-3 text-sm md:text-base text-gray-400 leading-7">
                      {sesion.description}
                    </p>

                  </div>

                </Link>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      <div
        className="relative z-10 flex w-full justify-center pb-[40px]"
        style={{ transform: "translateY(400px)" }}
      >
        <Link
          href="/retratos"
          className="text-sm uppercase tracking-[3px] text-gray-400 hover:text-red-500 transition"
        >
          ← VOLVER A RETRATOS
        </Link>
      </div>

      <div className="h-[100px]" aria-hidden="true" />

    </main>
  );
}
