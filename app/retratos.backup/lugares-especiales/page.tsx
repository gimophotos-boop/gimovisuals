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
  },
  {
    title: "Ana",
    href: "/retratos/lugares-especiales/ana",
    carpeta: "lugares-especiales/ana",
  },
  {
    title: "Ari",
    href: "/retratos/lugares-especiales/ari-patrimonio",
    carpeta: "lugares-especiales/ari-patrimonio",
  },
  {
    title: "Lucía — Delta del Ebro",
    href: "/retratos/lugares-especiales/lucia-delta",
    carpeta: "lugares-especiales/lucia-delta",
  },
  {
    title: "Lucía — Patrimonio de la Humanidad",
    href: "/retratos/lugares-especiales/lucia-patrimonio",
    carpeta: "lugares-especiales/lucia-patrimonio",
  },
  {
    title: "Lucía",
    href: "/retratos/lugares-especiales/lucia-vias",
    carpeta: "lugares-especiales/lucia-vias",
  },
  {
    title: "Olga",
    href: "/retratos/lugares-especiales/olga-cantera",
    carpeta: "lugares-especiales/olga-cantera",
  },
  {
    title: "Olga",
    href: "/retratos/lugares-especiales/olga-urbana",
    carpeta: "lugares-especiales/olga-urbana",
  },
  {
    title: "Sofi",
    href: "/retratos/lugares-especiales/sofi",
    carpeta: "lugares-especiales/sofi",
  },
];


const backgroundImages = [
  "/assets/images/retratos/lugares-especiales/adri-castillo/1.jpg",
  "/assets/images/retratos/lugares-especiales/adri-castillo/2.jpg",
  "/assets/images/retratos/lugares-especiales/adri-castillo/3.jpg",
  "/assets/images/retratos/lugares-especiales/adri-castillo/4.jpg",
  "/assets/images/retratos/lugares-especiales/adri-castillo/5.jpg",
  "/assets/images/retratos/lugares-especiales/adri-castillo/6.jpg",
  "/assets/images/retratos/lugares-especiales/adri-castillo/7.jpg",
  "/assets/images/retratos/lugares-especiales/adri-castillo/8.jpg",
  "/assets/images/retratos/lugares-especiales/adri-castillo/9.jpg",
  "/assets/images/retratos/lugares-especiales/adri-castillo/10.jpg",
  "/assets/images/retratos/lugares-especiales/adri-castillo/11.jpg",
  "/assets/images/retratos/lugares-especiales/adri-castillo/12.jpg",
  "/assets/images/retratos/lugares-especiales/ana/1.jpg",
  "/assets/images/retratos/lugares-especiales/ana/2.jpg",
  "/assets/images/retratos/lugares-especiales/ana/3.jpg",
  "/assets/images/retratos/lugares-especiales/ana/4.jpg",
  "/assets/images/retratos/lugares-especiales/ana/5.jpg",
  "/assets/images/retratos/lugares-especiales/ana/6.jpg",
  "/assets/images/retratos/lugares-especiales/ana/7.jpg",
  "/assets/images/retratos/lugares-especiales/ana/8.jpg",
  "/assets/images/retratos/lugares-especiales/ana/9.jpg",
  "/assets/images/retratos/lugares-especiales/ana/10.jpg",
  "/assets/images/retratos/lugares-especiales/ana/11.jpg",
  "/assets/images/retratos/lugares-especiales/ana/12.jpg",
  "/assets/images/retratos/lugares-especiales/ari-patrimonio/1.jpg",
  "/assets/images/retratos/lugares-especiales/ari-patrimonio/2.jpg",
  "/assets/images/retratos/lugares-especiales/ari-patrimonio/3.jpg",
  "/assets/images/retratos/lugares-especiales/ari-patrimonio/4.jpg",
  "/assets/images/retratos/lugares-especiales/ari-patrimonio/5.jpg",
  "/assets/images/retratos/lugares-especiales/ari-patrimonio/6.jpg",
  "/assets/images/retratos/lugares-especiales/ari-patrimonio/7.jpg",
  "/assets/images/retratos/lugares-especiales/ari-patrimonio/8.jpg",
  "/assets/images/retratos/lugares-especiales/ari-patrimonio/9.jpg",
  "/assets/images/retratos/lugares-especiales/ari-patrimonio/10.jpg",
  "/assets/images/retratos/lugares-especiales/ari-patrimonio/11.jpg",
  "/assets/images/retratos/lugares-especiales/ari-patrimonio/12.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-delta/1.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-delta/2.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-delta/3.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-delta/4.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-delta/5.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-delta/6.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-delta/7.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-delta/8.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-delta/9.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-delta/10.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-delta/11.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-delta/12.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-patrimonio/1.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-patrimonio/2.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-patrimonio/3.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-patrimonio/4.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-patrimonio/5.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-patrimonio/6.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-patrimonio/7.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-patrimonio/8.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-patrimonio/9.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-patrimonio/10.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-patrimonio/11.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-patrimonio/12.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-vias/1.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-vias/2.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-vias/3.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-vias/4.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-vias/5.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-vias/6.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-vias/7.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-vias/8.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-vias/9.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-vias/10.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-vias/11.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-vias/12.jpg",
  "/assets/images/retratos/lugares-especiales/olga-cantera/1.jpg",
  "/assets/images/retratos/lugares-especiales/olga-cantera/2.jpg",
  "/assets/images/retratos/lugares-especiales/olga-cantera/3.jpg",
  "/assets/images/retratos/lugares-especiales/olga-cantera/4.jpg",
  "/assets/images/retratos/lugares-especiales/olga-cantera/5.jpg",
  "/assets/images/retratos/lugares-especiales/olga-cantera/6.jpg",
  "/assets/images/retratos/lugares-especiales/olga-cantera/7.jpg",
  "/assets/images/retratos/lugares-especiales/olga-cantera/8.jpg",
  "/assets/images/retratos/lugares-especiales/olga-cantera/9.jpg",
  "/assets/images/retratos/lugares-especiales/olga-cantera/10.jpg",
  "/assets/images/retratos/lugares-especiales/olga-cantera/11.jpg",
  "/assets/images/retratos/lugares-especiales/olga-cantera/12.jpg",
  "/assets/images/retratos/lugares-especiales/olga-urbana/1.jpg",
  "/assets/images/retratos/lugares-especiales/olga-urbana/2.jpg",
  "/assets/images/retratos/lugares-especiales/olga-urbana/3.jpg",
  "/assets/images/retratos/lugares-especiales/olga-urbana/4.jpg",
  "/assets/images/retratos/lugares-especiales/olga-urbana/5.jpg",
  "/assets/images/retratos/lugares-especiales/olga-urbana/6.jpg",
  "/assets/images/retratos/lugares-especiales/olga-urbana/7.jpg",
  "/assets/images/retratos/lugares-especiales/olga-urbana/8.jpg",
  "/assets/images/retratos/lugares-especiales/olga-urbana/9.jpg",
  "/assets/images/retratos/lugares-especiales/olga-urbana/10.jpg",
  "/assets/images/retratos/lugares-especiales/olga-urbana/11.jpg",
  "/assets/images/retratos/lugares-especiales/olga-urbana/12.jpg",
  "/assets/images/retratos/lugares-especiales/sofi/1.jpg",
  "/assets/images/retratos/lugares-especiales/sofi/2.jpg",
  "/assets/images/retratos/lugares-especiales/sofi/3.jpg",
  "/assets/images/retratos/lugares-especiales/sofi/4.jpg",
  "/assets/images/retratos/lugares-especiales/sofi/5.jpg",
  "/assets/images/retratos/lugares-especiales/sofi/6.jpg",
  "/assets/images/retratos/lugares-especiales/sofi/7.jpg",
  "/assets/images/retratos/lugares-especiales/sofi/8.jpg",
  "/assets/images/retratos/lugares-especiales/sofi/9.jpg",
  "/assets/images/retratos/lugares-especiales/sofi/10.jpg",
  "/assets/images/retratos/lugares-especiales/sofi/11.jpg",
  "/assets/images/retratos/lugares-especiales/sofi/12.jpg"
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

export default function LugaresEspecialesPage() {
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
            Lugares especiales
          </h1>

          <p className="max-w-3xl text-xl text-gray-400 leading-9">
            Sesiones realizadas en escenarios únicos, históricos y
            especiales que forman parte de la historia de cada retrato.
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
