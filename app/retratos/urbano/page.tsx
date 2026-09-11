"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sesiones = [
  {
    title: "Adri",
    href: "/retratos/urbano/adri-urbano",
    carpeta: "urbano/adri-urbano",
    description: "Una sesión urbana donde la elegancia es la protagonista.",
  },
  {
    title: "Andrea",
    href: "/retratos/urbano/andrea-poligono",
    carpeta: "urbano/andrea-poligono",
    description: "De las calles al ambiente industrial, una sesión con diferentes estilos.",
  },
  {
    title: "Andrea",
    href: "/retratos/urbano/andrea-urbana",
    carpeta: "urbano/andrea-urbana",
    description: "Un escenario industrial con mucho carácter y una estética urbana.",
  },
  {
    title: "Laia",
    href: "/retratos/urbano/laia-urbana",
    carpeta: "urbano/laia-urbana",
    description: "Una sesión urbana entre edificios y escenarios industriales.",
  },
  {
    title: "Laura",
    href: "/retratos/urbano/laura-ciudad",
    carpeta: "urbano/laura-ciudad",
    description: "Una sesión urbana y desenfadada donde la actitud lo es todo.",
  },
  {
    title: "Laura",
    href: "/retratos/urbano/laura-industrial",
    carpeta: "urbano/laura-industrial",
    description: "Una sesión urbana en un escenario industrial.",
  },
  {
    title: "Lucía",
    href: "/retratos/urbano/lucia-parque",
    carpeta: "urbano/lucia-parque",
    description: "Los últimos rayos de sol para una sesión muy natural.",
  },
  {
    title: "Olga",
    href: "/retratos/urbano/olga-atardecer",
    carpeta: "urbano/olga-atardecer",
    description: "Una carretera y los últimos rayos de sol. A veces no hace falta más.",
  },
  {
    title: "Olga",
    href: "/retratos/urbano/olga-urbana",
    carpeta: "urbano/olga-urbana",
    description: "Cualquier calle puede convertirse en un escenario.",
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
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-zinc-950">
      <img
        src={foto}
        alt={titulo}
        className="h-full w-full object-contain transition-all duration-1000 group-hover:scale-[1.02]"
      />
    </div>
  );
}

export default function UrbanoPage() {
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
    <main className="min-h-[1950px] bg-black text-white">
      <Navbar />

      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`fixed inset-0 bg-contain bg-center bg-fixed bg-no-repeat transition-opacity duration-1000 pointer-events-none ${
            index === currentImage ? "opacity-50" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        />
      ))}

      <div className="fixed inset-0 bg-black/25 pointer-events-none" />

      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 pointer-events-none" />


      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-7xl">
          <p className="relative top-[110px] mb-6 font-semibold uppercase tracking-[8px] text-red-500">
            RETRATOS
          </p>

          <h1 className="relative top-[130px] mb-6 text-5xl font-black md:text-7xl">
            Urbano
          </h1>

          <p className="relative top-[150px] max-w-3xl text-xl leading-9 text-gray-400">
            Retratos con un estilo urbano, callejero y moderno,
            utilizando la ciudad como parte de la composición.
          </p>
        </div>
      </section>

      <section className="relative z-10 top-[300px] px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
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
                  className="group block rounded-[26px] border border-zinc-800 bg-zinc-950 transition duration-500 hover:border-red-600"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
                    <PortadaSesion
                      carpeta={sesion.carpeta}
                      titulo={sesion.title}
                    />
                  </div>

                  <div className="px-6 py-5">
                    <h2 className="text-xl font-black leading-tight transition group-hover:text-red-500 md:text-2xl">
                      {sesion.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-gray-400 md:text-base">
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
          className="text-gray-400 transition hover:text-white uppercase tracking-[3px]"
        >
          ← VOLVER A RETRATOS
        </Link>
      </div>

      <div className="h-[100px]" aria-hidden="true" />

    </main>
  );
}
