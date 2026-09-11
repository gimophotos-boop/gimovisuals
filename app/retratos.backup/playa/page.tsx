"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const backgroundImages = [
  "/assets/images/retratos/playa/itzi/1.jpg",
  "/assets/images/retratos/playa/kelly/1.jpg",
  "/assets/images/retratos/playa/lidia-playa/1.jpg",
  "/assets/images/retratos/playa/nadia/1.jpg",
  "/assets/images/retratos/playa/olga-verano/1.jpg",
  "/assets/images/retratos/playa/paola/1.jpg",
  "/assets/images/retratos/playa/rocio/1.jpg",
];

const sesiones = [
  { title: "Itzi", href: "/retratos/playa/itzi", carpeta: "playa/itzi" },
  { title: "Sesión de playa con Kelly", href: "/retratos/playa/kelly", carpeta: "playa/kelly" },
  { title: "Lidia", href: "/retratos/playa/lidia-playa", carpeta: "playa/lidia-playa" },
  { title: "Nadia", href: "/retratos/playa/nadia", carpeta: "playa/nadia" },
  { title: "Olga", href: "/retratos/playa/olga-verano", carpeta: "playa/olga-verano" },
  { title: "Sesión de playa con Paola", href: "/retratos/playa/paola", carpeta: "playa/paola" },
  { title: "Sesión en una playa de piedra con Rocío", href: "/retratos/playa/rocio", carpeta: "playa/rocio" },
];

function PortadaSesion({ carpeta, titulo }: { carpeta: string; titulo: string }) {
  const [foto, setFoto] = useState(1);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFoto((prev) => (prev >= 12 ? 1 : prev + 1));
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <img
        src={`/assets/images/retratos/${carpeta}/${foto}.jpg`}
        alt={titulo}
        className="w-full h-full object-cover transition-opacity duration-1000"
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
    <main className="relative min-h-screen overflow-hidden text-white">

      <Navbar />

      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`fixed inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url("${image}")` }}
        />
      ))}

      <div className="fixed inset-0 bg-black/45" />
      <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/70" />

      <div className="relative z-10 pt-[260px] pb-[180px] px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <Link
              href="/retratos"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-12"
            >
              ← Volver a Retratos
            </Link>

            <p className="uppercase tracking-[6px] text-red-500 font-medium text-[17px] mb-4">
              RETRATOS
            </p>

            <h1 className="text-[58px] md:text-[72px] leading-[1.04] font-black tracking-[-1.5px]">
              Sesiones en la playa
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-8">
              Retratos realizados junto al mar, buscando aprovechar la luz,
              el entorno y la naturalidad de cada persona.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {sesiones.map((sesion, index) => (
              <motion.div
                key={sesion.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <Link
                  href={sesion.href}
                  className="group block overflow-hidden rounded-[30px] border border-zinc-700 bg-black/60 backdrop-blur-sm hover:border-red-600 transition duration-500"
                >

                  <div className="relative aspect-[4/3] overflow-hidden">
                    <PortadaSesion
                      carpeta={sesion.carpeta}
                      titulo={sesion.title}
                    />
                  </div>

                  <div className="p-7">

                    <h2 className="text-xl md:text-2xl font-black leading-tight group-hover:text-red-500 transition">
                      {sesion.title}
                    </h2>

                    <div className="mt-6 flex items-center justify-between">

                      <span className="text-sm text-gray-400 uppercase tracking-[2px]">
                        Retratos
                      </span>

                      <span className="text-sm font-semibold text-white group-hover:text-red-500 transition">
                        
                      </span>

                    </div>

                  </div>

                </Link>
              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}
