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
  },
  {
    title: "Sesión de playa con Kelly",
    href: "/retratos/playa/kelly",
    carpeta: "playa/kelly",
  },
  {
    title: "Lidia",
    href: "/retratos/playa/lidia-playa",
    carpeta: "playa/lidia-playa",
  },
  {
    title: "Nadia",
    href: "/retratos/playa/nadia",
    carpeta: "playa/nadia",
  },
  {
    title: "Olga",
    href: "/retratos/playa/olga-verano",
    carpeta: "playa/olga-verano",
  },
  {
    title: "Sesión de playa con Paola",
    href: "/retratos/playa/paola",
    carpeta: "playa/paola",
  },
  {
    title: "Sesión en una playa de piedra con Rocío",
    href: "/retratos/playa/rocio",
    carpeta: "playa/rocio",
  },
];


const backgroundImages = [
  "/assets/images/retratos/playa/itzi/1.jpg",
  "/assets/images/retratos/playa/itzi/2.jpg",
  "/assets/images/retratos/playa/itzi/3.jpg",
  "/assets/images/retratos/playa/itzi/4.jpg",
  "/assets/images/retratos/playa/itzi/5.jpg",
  "/assets/images/retratos/playa/itzi/6.jpg",
  "/assets/images/retratos/playa/itzi/7.jpg",
  "/assets/images/retratos/playa/itzi/8.jpg",
  "/assets/images/retratos/playa/itzi/9.jpg",
  "/assets/images/retratos/playa/itzi/10.jpg",
  "/assets/images/retratos/playa/itzi/11.jpg",
  "/assets/images/retratos/playa/itzi/12.jpg",
  "/assets/images/retratos/playa/kelly/1.jpg",
  "/assets/images/retratos/playa/kelly/2.jpg",
  "/assets/images/retratos/playa/kelly/3.jpg",
  "/assets/images/retratos/playa/kelly/4.jpg",
  "/assets/images/retratos/playa/kelly/5.jpg",
  "/assets/images/retratos/playa/kelly/6.jpg",
  "/assets/images/retratos/playa/kelly/7.jpg",
  "/assets/images/retratos/playa/kelly/8.jpg",
  "/assets/images/retratos/playa/kelly/9.jpg",
  "/assets/images/retratos/playa/kelly/10.jpg",
  "/assets/images/retratos/playa/kelly/11.jpg",
  "/assets/images/retratos/playa/kelly/12.jpg",
  "/assets/images/retratos/playa/lidia-playa/1.jpg",
  "/assets/images/retratos/playa/lidia-playa/2.jpg",
  "/assets/images/retratos/playa/lidia-playa/3.jpg",
  "/assets/images/retratos/playa/lidia-playa/4.jpg",
  "/assets/images/retratos/playa/lidia-playa/5.jpg",
  "/assets/images/retratos/playa/lidia-playa/6.jpg",
  "/assets/images/retratos/playa/lidia-playa/7.jpg",
  "/assets/images/retratos/playa/lidia-playa/8.jpg",
  "/assets/images/retratos/playa/lidia-playa/9.jpg",
  "/assets/images/retratos/playa/lidia-playa/10.jpg",
  "/assets/images/retratos/playa/lidia-playa/11.jpg",
  "/assets/images/retratos/playa/lidia-playa/12.jpg",
  "/assets/images/retratos/playa/nadia/1.jpg",
  "/assets/images/retratos/playa/nadia/2.jpg",
  "/assets/images/retratos/playa/nadia/3.jpg",
  "/assets/images/retratos/playa/nadia/4.jpg",
  "/assets/images/retratos/playa/nadia/5.jpg",
  "/assets/images/retratos/playa/nadia/6.jpg",
  "/assets/images/retratos/playa/nadia/7.jpg",
  "/assets/images/retratos/playa/nadia/8.jpg",
  "/assets/images/retratos/playa/nadia/9.jpg",
  "/assets/images/retratos/playa/nadia/10.jpg",
  "/assets/images/retratos/playa/nadia/11.jpg",
  "/assets/images/retratos/playa/nadia/12.jpg",
  "/assets/images/retratos/playa/olga-verano/1.jpg",
  "/assets/images/retratos/playa/olga-verano/2.jpg",
  "/assets/images/retratos/playa/olga-verano/3.jpg",
  "/assets/images/retratos/playa/olga-verano/4.jpg",
  "/assets/images/retratos/playa/olga-verano/5.jpg",
  "/assets/images/retratos/playa/olga-verano/6.jpg",
  "/assets/images/retratos/playa/olga-verano/7.jpg",
  "/assets/images/retratos/playa/olga-verano/8.jpg",
  "/assets/images/retratos/playa/olga-verano/9.jpg",
  "/assets/images/retratos/playa/olga-verano/10.jpg",
  "/assets/images/retratos/playa/olga-verano/11.jpg",
  "/assets/images/retratos/playa/olga-verano/12.jpg",
  "/assets/images/retratos/playa/paola/1.jpg",
  "/assets/images/retratos/playa/paola/2.jpg",
  "/assets/images/retratos/playa/paola/3.jpg",
  "/assets/images/retratos/playa/paola/4.jpg",
  "/assets/images/retratos/playa/paola/5.jpg",
  "/assets/images/retratos/playa/paola/6.jpg",
  "/assets/images/retratos/playa/paola/7.jpg",
  "/assets/images/retratos/playa/paola/8.jpg",
  "/assets/images/retratos/playa/paola/9.jpg",
  "/assets/images/retratos/playa/paola/10.jpg",
  "/assets/images/retratos/playa/paola/11.jpg",
  "/assets/images/retratos/playa/paola/12.jpg",
  "/assets/images/retratos/playa/rocio/1.jpg",
  "/assets/images/retratos/playa/rocio/2.jpg",
  "/assets/images/retratos/playa/rocio/3.jpg",
  "/assets/images/retratos/playa/rocio/4.jpg",
  "/assets/images/retratos/playa/rocio/5.jpg",
  "/assets/images/retratos/playa/rocio/6.jpg",
  "/assets/images/retratos/playa/rocio/7.jpg",
  "/assets/images/retratos/playa/rocio/8.jpg",
  "/assets/images/retratos/playa/rocio/9.jpg",
  "/assets/images/retratos/playa/rocio/10.jpg",
  "/assets/images/retratos/playa/rocio/11.jpg",
  "/assets/images/retratos/playa/rocio/12.jpg"
];

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
        className="relative w-full h-full object-contain transition-all duration-1000 group-hover:scale-[1.02]"
      />
    </div>
  );
}

export default function PlayaPage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />
      
      {/* FONDOS ROTATIVOS */}

      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`fixed inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        />
      ))}

      {/* OSCURECIMIENTO */}

      <div className="fixed inset-0 bg-black/25" />

      {/* DEGRADADO */}

      <div className="fixed inset-0 bg-gradient-to-b from-black/65 via-black/15 to-black/45" />


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
            Sesiones en la playa
          </h1>

          <p className="max-w-3xl text-xl text-gray-400 leading-9">
            Retratos realizados junto al mar, buscando aprovechar la luz,
            el entorno y la naturalidad de cada persona.
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

                  <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden">
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

                      <span className="text-sm text-gray-500 uppercase tracking-[2px]">
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
      </section>

    </main>
  );
}
