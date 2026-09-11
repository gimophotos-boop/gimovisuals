"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sesiones = [
  {
    title: "Itzi",
    href: "/retratos/playa/itzi",
    carpeta: "playa/itzi",
    description:
      "Mar, naturaleza y diferentes escenarios en una sesión llena de contrastes.",
  },
  {
    title: "Kelly",
    href: "/retratos/playa/kelly",
    carpeta: "playa/kelly",
    description:
      "Una sesión donde los tonos azules del mar y los verdes de la naturaleza se funden a la perfección.",
  },
  {
    title: "Lidia",
    href: "/retratos/playa/lidia-playa",
    carpeta: "playa/lidia-playa",
    description:
      "Una sesión junto al mar aprovechando la luz y los tonos naturales.",
  },
  {
    title: "Nadia",
    href: "/retratos/playa/nadia",
    carpeta: "playa/nadia",
    description:
      "Una sesión al atardecer aprovechando los últimos rayos de sol.",
  },
  {
    title: "Olga",
    href: "/retratos/playa/olga-verano",
    carpeta: "playa/olga-verano",
    description:
      "Una sesión 100% veraniega, natural y luminosa.",
  },
  {
    title: "Paola",
    href: "/retratos/playa/paola",
    carpeta: "playa/paola",
    description:
      "Una sesión junto al mar jugando con el azul y el verde del entorno.",
  },
  {
    title: "Rocío",
    href: "/retratos/playa/rocio",
    carpeta: "playa/rocio",
    description:
      "Una playa diferente, texturas naturales y una estética muy especial.",
  },
];

const backgroundImages = sesiones
  .flatMap((sesion) =>
    Array.from({ length: 12 }, (_, i) =>
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

export default function PlayaPage() {
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
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`fixed inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000 pointer-events-none ${
            index === currentImage ? "opacity-50" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        />
      ))}

      <div className="fixed inset-0 bg-black/25 pointer-events-none" />

      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10">

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">



          <p className="relative top-[110px] uppercase tracking-[8px] text-red-500 font-semibold mb-6">
          RETRATOS
        </p>

        <h1 className="relative top-[150px] text-5xl md:text-7xl font-black mb-6">
            Playa
          </h1>

          <p className="relative top-[180px] max-w-3xl text-xl text-gray-400 leading-9">
            Retratos realizados junto al mar, buscando aprovechar la luz,
            el entorno y la naturalidad de cada persona.
          </p>

        </div>
      </section>

      <section className="relative top-[300px] pb-32 px-6">
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

                  <div className="px-6 py-7">

                    <h2 className="text-xl md:text-2xl font-black leading-tight break-words group-hover:text-red-500 transition">
                      {sesion.title}
                    </h2>

                    <p className="mt-3 pb-2 text-sm md:text-base text-gray-400 leading-7">
                      {sesion.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between">


                      <span className="text-sm font-semibold text-white group-hover:text-red-500 transition">
                        
                      </span>

                    </div>

                  </div>

                </Link>

              </motion.div>
            ))}

          </div>

        </div>
      </section>



      </div>


      <div className="relative z-10 top-[250px] flex w-full justify-center px-6 pb-24">
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
