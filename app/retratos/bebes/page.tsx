"use client";

import Navbar from "@/app/components/Navbar";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sesiones = [
  {
    title: "Leo",
    description: "Una sesión navideña con Leo, con tan solo 3 meses.",
    href: "/retratos/bebes/leo-3-meses",
    carpeta: "bebes/leo-3-meses",
  },
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

export default function BebesPage() {
  const backgroundImages = Array.from(
    { length: 12 },
    (_, i) => `/assets/images/retratos/bebes/leo-3-meses/${i + 1}.jpg`
  );

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
    <main className="min-h-[1400px] bg-black text-white">

      <Navbar />

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none overflow-hidden pointer-events-none">
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

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/25 to-black/75" />
      </div>
      
      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
<p className="relative top-[110px] uppercase tracking-[8px] text-red-500 font-semibold mb-6">RETRATOS</p>

          <h1 className="relative top-[130px] text-5xl md:text-7xl font-black mb-6">
            Bebés
          </h1>

          <p className="relative top-[150px] max-w-3xl text-xl text-gray-400 leading-9">
            Sesiones de retrato para bebés, capturando sus primeros meses
            y convirtiéndolos en recuerdos para toda la vida.
          </p>

        </div>
      </section>

      <section className="relative z-10 top-[300px] relative z-10 pb-32 px-6">
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
                  className="group block overflow-hidden rounded-[26px] border border-zinc-800 bg-zinc-950 hover:border-red-600 transition duration-500"
                >

                  <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden">
                    <PortadaSesion
                      carpeta={sesion.carpeta}
                      titulo={sesion.title}
                    />
                  </div>

                  <div className="px-6 py-5">

                    <h2 className="text-xl md:text-2xl font-black leading-tight group-hover:text-red-500 transition">
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

    </main>
  );
}
