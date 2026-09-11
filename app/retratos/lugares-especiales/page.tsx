"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sesiones = [
  {
    title: "Adri",
    href: "/retratos/lugares-especiales/adri-castillo",
    carpeta: "lugares-especiales/adri-castillo",
    description:
      "Piedra, historia y elegancia en una sesión con mucho carácter.",
  },
  {
    title: "Ana",
    href: "/retratos/lugares-especiales/ana",
    carpeta: "lugares-especiales/ana",
    description:
      "Una sesión junto al mar con una estética natural y luminosa.",
  },
  {
    title: "Ari",
    href: "/retratos/lugares-especiales/ari-patrimonio",
    carpeta: "lugares-especiales/ari-patrimonio",
    description:
      "Una sesión en un entorno histórico con una estética muy especial.",
  },
  {
    title: "Lucía",
    href: "/retratos/lugares-especiales/lucia-delta",
    carpeta: "lugares-especiales/lucia-delta",
    description:
      "Una sesión en un entorno natural único, donde el agua y la vegetación son protagonistas.",
  },
  {
    title: "Lucía",
    href: "/retratos/lugares-especiales/lucia-patrimonio",
    carpeta: "lugares-especiales/lucia-patrimonio",
    description:
      "Historia, naturaleza y una arquitectura con un carácter único.",
  },
  {
    title: "Lucía",
    href: "/retratos/lugares-especiales/lucia-vias",
    carpeta: "lugares-especiales/lucia-vias",
    description:
      "Un escenario que mezcla vías abandonadas, bosque, túnel y elementos abandonados.",
  },
  {
    title: "Olga",
    href: "/retratos/lugares-especiales/olga-cantera",
    carpeta: "lugares-especiales/olga-cantera",
    description:
      "Una sesión con una estética más salvaje, jugando con piedra, montaña y naturaleza.",
  },
  {
    title: "Olga",
    href: "/retratos/lugares-especiales/olga-urbana",
    carpeta: "lugares-especiales/olga-urbana",
    description:
      "Una sesión en un pueblo blanco junto al mar, combinando arquitectura, mar y una estética natural.",
  },
  {
    title: "Sofi",
    href: "/retratos/lugares-especiales/sofi",
    carpeta: "lugares-especiales/sofi",
    description:
      "Un entorno natural donde conviven mar, bosque y diferentes escenarios.",
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
  const [foto, setFoto] = useState("");

  useEffect(() => {
    const obtenerFoto = () =>
      `/assets/images/retratos/${carpeta}/${Math.floor(Math.random() * 12) + 1}.jpg`;

    setFoto(obtenerFoto());

    const intervalo = setInterval(() => {
      setFoto(obtenerFoto());
    }, 5000);

    return () => clearInterval(intervalo);
  }, [carpeta]);

  if (!foto) {
    return <div className="absolute inset-0 bg-zinc-950" />;
  }

  return (
    <div className="absolute inset-0 bg-zinc-950 flex items-center justify-center overflow-hidden">
      <img
        src={foto}
        alt={titulo}
        className="w-full h-full object-contain transition-all duration-1000 group-hover:scale-[1.02]"
      />
    </div>
  );
}

export default function LugaresEspecialesPage() {
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
            Lugares especiales
          </h1>

          <p className="relative top-[150px] max-w-3xl text-xl text-gray-400 leading-9">
            Sesiones realizadas en lugares diferentes, aprovechando la
            arquitectura, los paisajes y los entornos más especiales.
          </p>

        </div>
      </section>

      <section className="relative z-10 top-[300px] pb-32 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

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
                  className="group block rounded-[26px] border border-zinc-800 bg-zinc-950 hover:border-red-600 transition duration-500"
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
