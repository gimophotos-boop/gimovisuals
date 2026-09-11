"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sesiones = [
  {
    title: "Adri",
    href: "/retratos/naturaleza/adri-pueblo-mirador",
    carpeta: "naturaleza/adri-pueblo-mirador",
    description:
      "Una sesión llena de elegancia entre naturaleza y paisajes.",
  },
  {
    title: "Andrea",
    href: "/retratos/naturaleza/andrea-bosque",
    carpeta: "naturaleza/andrea-bosque",
    description:
      "El verde del bosque combinado con el rojo de su vestimenta.",
  },
  {
    title: "Andrea",
    href: "/retratos/naturaleza/andrea-naturaleza",
    carpeta: "naturaleza/andrea-naturaleza",
    description:
      "Tonos marrones, naturaleza y diferentes texturas para una sesión muy cálida.",
  },
  {
    title: "Andrea",
    href: "/retratos/naturaleza/andrea-parque",
    carpeta: "naturaleza/andrea-parque",
    description:
      "Una sesión natural aprovechando la vegetación, la luz y el entorno.",
  },
  {
    title: "Andrea",
    href: "/retratos/naturaleza/andrea-vias",
    carpeta: "naturaleza/andrea-vias",
    description:
      "Naturaleza, estructuras abandonadas y una estética muy cinematográfica.",
  },
  {
    title: "Esther",
    href: "/retratos/naturaleza/esther",
    carpeta: "naturaleza/esther",
    description:
      "Luz, madera y mar en una sesión con unas vistas espectaculares.",
  },
  {
    title: "Lidia",
    href: "/retratos/naturaleza/lidia-ermita",
    carpeta: "naturaleza/lidia-ermita",
    description:
      "Tonos rojizos, naturaleza y unas vistas que hacen especial cada fotografía.",
  },
  {
    title: "Lidia",
    href: "/retratos/naturaleza/lidia-vias",
    carpeta: "naturaleza/lidia-vias",
    description:
      "Un escenario abandonado rodeado de naturaleza, perfecto para una sesión diferente.",
  },
  {
    title: "Lucía",
    href: "/retratos/naturaleza/lucia-naturaleza",
    carpeta: "naturaleza/lucia-naturaleza",
    description:
      "Tonos verdes y luz natural para una sesión llena de calma.",
  },
  {
    title: "Marina",
    href: "/retratos/naturaleza/marina-jardines",
    carpeta: "naturaleza/marina-jardines",
    description:
      "Una sesión rodeada de jardines, vegetación y agua.",
  },
  {
    title: "Marina",
    href: "/retratos/naturaleza/marina-lago",
    carpeta: "naturaleza/marina-lago",
    description:
      "Naturaleza, jardines y un lago como escenario.",
  },
  {
    title: "Noa",
    href: "/retratos/naturaleza/noa-ermita",
    carpeta: "naturaleza/noa-ermita",
    description:
      "Una sesión rodeada de naturaleza y arquitectura, con una estética tranquila y especial.",
  },
  {
    title: "Olga",
    href: "/retratos/naturaleza/olga-playa",
    carpeta: "naturaleza/olga-playa",
    description:
      "Una sesión junto al mar jugando con los tonos naturales del entorno.",
  },
  {
    title: "Olga",
    href: "/retratos/naturaleza/olga-vias",
    carpeta: "naturaleza/olga-vias",
    description:
      "Un escenario lleno de posibilidades donde la naturaleza se mezcla con elementos abandonados.",
  },
];

const backgroundImages = sesiones
  .flatMap((sesion) =>
    Array.from(
      { length: 12 },
      (_, index) =>
        `/assets/images/retratos/${sesion.carpeta}/${index + 1}.jpg`
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

export default function NaturalezaPage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCurrentImage((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <main className="relative min-h-[1950px] text-white">

      <Navbar />

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? "opacity-50" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url("${image}")`,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/50" />
      </div>

      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          <p className="relative top-[110px] uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            RETRATOS
          </p>

          <h1 className="relative top-[130px] text-5xl md:text-7xl font-black mb-6">
            Naturaleza
          </h1>

          <p className="relative top-[150px] max-w-3xl text-xl text-gray-300 leading-9">
            Sesiones realizadas en entornos naturales, aprovechando la luz,
            los paisajes y la personalidad de cada persona.
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

      <div className="relative z-10 flex w-full justify-center pb-[40px]" style={{ transform: "translateY(400px)" }}>
        <Link
          href="/retratos"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold uppercase tracking-[2px] text-gray-300 transition hover:border-red-600 hover:text-white"
        >
          ← VOLVER A RETRATOS
        </Link>
      </div>

    </main>
  );
}
